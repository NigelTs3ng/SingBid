'use client'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'
import { setLoading, setProfile, setError, clearUser } from '@/lib/slices/userSlice'
import type { RootState } from '@/lib/store'
import { routes } from '@/utils/routes'

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterData extends LoginCredentials {
  name: string
}

const isValidRoute = (path: string | null): path is string => {
  if (!path) return false
  // Add any additional route validation logic here
  return path.startsWith('/')
}

export function useAuth() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const { profile, isAuthenticated, loading } = useSelector((state: RootState) => state.user)

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      dispatch(setProfile(data.user))
      
      const returnUrl = searchParams?.get('returnUrl')
      const validatedPath = isValidRoute(returnUrl) ? returnUrl : routes.home
      router.push(validatedPath)
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Login failed'))
    } finally {
      dispatch(setLoading(false))
    }
  }, [dispatch, router, searchParams])

  const register = useCallback(async (data: RegisterData) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const responseData = await response.json()
      dispatch(setProfile(responseData.user))
      router.push(routes.home)
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Registration failed'))
    } finally {
      dispatch(setLoading(false))
    }
  }, [dispatch, router])

  const logout = useCallback(async () => {
    try {
      dispatch(setLoading(true))
      await fetch('/api/auth/logout', { method: 'POST' })
      dispatch(clearUser())
      router.push(routes.login)
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Logout failed'))
    } finally {
      dispatch(setLoading(false))
    }
  }, [dispatch, router])

  return {
    profile,
    isAuthenticated,
    loading,
    login,
    register,
    logout
  }
}