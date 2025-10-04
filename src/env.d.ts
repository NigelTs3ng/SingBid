/// <reference types="next" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string
    NEXT_PUBLIC_GA_TRACKING_ID: string
    STRIPE_SECRET_KEY: string
    JWT_SECRET: string
    MONGODB_URI: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
}