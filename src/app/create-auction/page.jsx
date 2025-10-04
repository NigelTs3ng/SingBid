'use client'

import { useState } from 'react'
import Header from '@/components/ui/Header'
import AuctionBasicDetails from './components/AuctionBasicDetails'
import AuctionImageUpload from './components/AuctionImageUpload'
import AuctionTimingControls from './components/AuctionTimingControls'
import AuctionAdvancedOptions from './components/AuctionAdvancedOptions'
import AuctionPreview from './components/AuctionPreview'
import AuctionSubmission from './components/AuctionSubmission'

const steps = [
  { id: 1, title: 'Basic Details', icon: 'FileText' },
  { id: 2, title: 'Images', icon: 'Image' },
  { id: 3, title: 'Timing', icon: 'Clock' },
  { id: 4, title: 'Options', icon: 'Settings' },
  { id: 5, title: 'Preview', icon: 'Eye' },
  { id: 6, title: 'Submit', icon: 'Send' }
]

export default function CreateAuctionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [images, setImages] = useState([])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AuctionBasicDetails formData={formData} onUpdate={setFormData} onNext={() => setCurrentStep(2)} />
      case 2:
        return <AuctionImageUpload images={images} onUpdate={setImages} onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />
      case 3:
        return <AuctionTimingControls formData={formData} onUpdate={setFormData} onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />
      case 4:
        return <AuctionAdvancedOptions formData={formData} onUpdate={setFormData} onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />
      case 5:
        return <AuctionPreview formData={formData} images={images} onNext={() => setCurrentStep(6)} onBack={() => setCurrentStep(4)} />
      case 6:
        return <AuctionSubmission formData={formData} images={images} onBack={() => setCurrentStep(5)} />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-4">Progress</h3>
              <div className="space-y-2">
                {steps.map(step => {
                  const isActive = step.id === currentStep
                  const isCompleted = step.id < currentStep
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => step.id <= currentStep && setCurrentStep(step.id)}
                      disabled={step.id > currentStep}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        isActive ? 'bg-primary text-primary-foreground' :
                        isCompleted ? 'bg-success/10 text-success hover:bg-success/20' :
                        'text-muted-foreground hover:bg-muted cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span className="text-sm font-medium">{step.title}</span>
                    </button>
                  )
                })}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderStep()}
          </div>
        </div>
      </div>
    </main>
  )
}