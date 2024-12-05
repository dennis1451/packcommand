import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';

export function VideoUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate upload
    setUploadStatus('uploading');
    setTimeout(() => setUploadStatus('success'), 2000);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
        ${isDragging ? 'border-forest-500 bg-forest-50' : 'border-stone-300 hover:border-forest-400'}
        ${uploadStatus === 'success' ? 'border-forest-500 bg-forest-50' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {uploadStatus === 'idle' && (
        <>
          <Upload className="mx-auto h-12 w-12 text-forest-500 mb-4" />
          <p className="text-stone-600">Drag and drop your training video here</p>
          <p className="text-sm text-stone-500 mt-2">or click to select a file</p>
        </>
      )}
      {uploadStatus === 'uploading' && (
        <div className="animate-pulse">
          <p className="text-forest-600">Uploading video...</p>
        </div>
      )}
      {uploadStatus === 'success' && (
        <>
          <Check className="mx-auto h-12 w-12 text-forest-500 mb-4" />
          <p className="text-forest-600">Video uploaded successfully!</p>
        </>
      )}
    </div>
  );
}