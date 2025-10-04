'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export const useFileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const uploadFile = async (file, endpoint) => {
    if (!file) return null

    setIsUploading(true)
    setUploadProgress(0)
    
    const formData = new FormData()
    formData.append('file', file)

    try {
      const xhr = new XMLHttpRequest()
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded * 100) / event.total)
          setUploadProgress(progress)
        }
      })

      const response = await new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response))
          } else {
            reject(new Error('Upload failed'))
          }
        }
        xhr.onerror = () => reject(new Error('Upload failed'))
        xhr.open('POST', endpoint)
        xhr.send(formData)
      })

      toast.success('File uploaded successfully')
      return response
    } catch (error) {
      toast.error('Failed to upload file')
      console.error('Upload error:', error)
      return null
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  return {
    uploadFile,
    uploadProgress,
    isUploading
  }
}