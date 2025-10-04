class ApiError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message)
    this.name = 'ApiError'
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL

async function handleResponse(response: Response) {
  const data = await response.json()
  
  if (!response.ok) {
    throw new ApiError(data.error || 'Something went wrong', response.status)
  }
  
  return data
}

export async function get(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return handleResponse(response)
}

export async function post(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return handleResponse(response)
}

export async function put(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return handleResponse(response)
}

export async function del(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return handleResponse(response)
}

export { ApiError }