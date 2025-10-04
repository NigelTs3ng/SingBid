import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface UserProfile {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  avatarUrl?: string
}

interface UserState {
  profile: UserProfile | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  subscription: {
    plan: string
    status: string
    expiresAt: string | null
  }
  preferences: {
    notifications: {
      email: boolean
      push: boolean
      bidUpdates: boolean
      auctionEnding: boolean
      newAuctions: boolean
    }
    theme: string
  }
}

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    // TODO: Replace with actual API call
    return null
  }
)

const initialState: UserState = {
  profile: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  subscription: {
    plan: 'free',
    status: 'active',
    expiresAt: null
  },
  preferences: {
    notifications: {
      email: true,
      push: true,
      bidUpdates: true,
      auctionEnding: true,
      newAuctions: false
    },
    theme: 'light'
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload
      state.isAuthenticated = true
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearUser: (state) => {
      state.profile = null
      state.isAuthenticated = false
      state.error = null
    },
    updateSubscription: (state, action) => {
      state.subscription = { ...state.subscription, ...action.payload }
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
        state.isAuthenticated = !!action.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setProfile, setLoading, setError, clearUser, updateSubscription, updatePreferences } = userSlice.actions
export const userReducer = userSlice.reducer