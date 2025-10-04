'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { store } from '@/lib/store'
import ErrorBoundary from '@/components/ErrorBoundary'
import Header from '@/components/ui/Header'

export function Providers({ children }) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            {/* We can add Footer here later if needed */}
          </div>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
              className: 'text-foreground',
            }}
          />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  )
}