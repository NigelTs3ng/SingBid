import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuctions = createAsyncThunk(
  'auctions/fetchAuctions',
  async () => {
    // TODO: Replace with actual API call
    return []
  }
)

const initialState = {
  items: [],
  activeAuctions: [],
  completedAuctions: [],
  loading: false,
  error: null,
  filters: {
    category: 'all',
    status: 'all',
    location: 'all',
    priceRange: { min: '', max: '' },
    search: ''
  },
  sortBy: 'ending-time',
  sortOrder: 'asc'
}

export const auctionsSlice = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setSorting: (state, action) => {
      const { sortBy, sortOrder } = action.payload
      state.sortBy = sortBy
      state.sortOrder = sortOrder
    },
    addAuction: (state, action) => {
      state.items.push(action.payload)
      state.activeAuctions.push(action.payload)
    },
    updateAuction: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctions.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAuctions.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.activeAuctions = action.payload.filter(auction => 
          new Date(auction.endTime) > new Date()
        )
        state.completedAuctions = action.payload.filter(auction => 
          new Date(auction.endTime) <= new Date()
        )
      })
      .addCase(fetchAuctions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setFilters, setSorting, addAuction, updateAuction } = auctionsSlice.actions
export const auctionsReducer = auctionsSlice.reducer