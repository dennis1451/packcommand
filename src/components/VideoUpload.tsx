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
        ${isDragging ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-amber-400'}
        ${uploadStatus === 'success' ? 'border-green-500 bg-green-50' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {uploadStatus === 'idle' && (
        <>
          <Upload className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <p className="text-gray-600">Drag and drop your training video here</p>
          <p className="text-sm text-gray-500 mt-2">or click to select a file</p>
        </>
      )}
      {uploadStatus === 'uploading' && (
        <div className="animate-pulse">
          <p className="text-amber-600">Uploading video...</p>
        </div>
      )}
      {uploadStatus === 'success' && (
        <>
          <Check className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <p className="text-green-600">Video uploaded successfully!</p>
        </>
      )}
    </div>
  );
}