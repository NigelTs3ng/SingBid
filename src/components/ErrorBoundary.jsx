'use client'

import { Component } from 'react'
import Button from './ui/Button'
import Icon from './AppIcon'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 text-destructive">
              <Icon name="AlertTriangle" size={48} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Something went wrong
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {this.state.error?.message || 
                'An unexpected error occurred. Please try again.'}
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="space-x-2"
              >
                <Icon name="RefreshCw" size={16} />
                <span>Reload page</span>
              </Button>
              <Button
                onClick={this.handleReset}
                className="space-x-2"
              >
                <Icon name="RotateCcw" size={16} />
                <span>Try again</span>
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}