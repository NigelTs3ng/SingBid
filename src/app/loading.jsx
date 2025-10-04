export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="relative flex flex-col items-center gap-3 animate-fade-in">
        <div className="w-12 h-12 rounded-full border-4 border-muted border-t-primary animate-spin" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  )
}