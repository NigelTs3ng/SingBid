import Link from 'next/link'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="text-center space-y-4 animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-4 text-muted-foreground">
          <Icon name="Search" size={64} />
        </div>
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or doesn&apos;t exist.
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            asChild
            variant="outline"
          >
            <Link href="/auction-listings" className="space-x-2">
              <Icon name="Search" size={16} />
              <span>Browse auctions</span>
            </Link>
          </Button>
          <Button
            asChild
          >
            <Link href="/" className="space-x-2">
              <Icon name="Home" size={16} />
              <span>Go home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}