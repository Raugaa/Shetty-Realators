import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { X, Upload } from 'lucide-react';

interface ImageUploadProps {
  onImagesChange: (files: File[]) => void;
  existingImages?: string[];
  maxImages?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImagesChange, 
  existingImages = [], 
  maxImages = 10 
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = [...selectedFiles, ...acceptedFiles].slice(0, maxImages);
    setSelectedFiles(newFiles);
    
    // Create preview URLs
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);
    
    onImagesChange(newFiles);
  }, [selectedFiles, maxImages, onImagesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: true,
    maxFiles: maxImages
  });

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    
    setSelectedFiles(newFiles);
    setPreviewUrls(newPreviewUrls);
    onImagesChange(newFiles);
  };

  const totalImages = existingImages.length + selectedFiles.length;

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="w-8 h-8 text-gray-400" />
          {isDragActive ? (
            <p className="text-blue-500">Drop the images here...</p>
          ) : (
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Drag & drop property images here, or click to select
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PNG, JPG, WEBP up to 10MB each (max {maxImages} images)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Existing Images */}
      {existingImages.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2">Existing Images</h4>
          <div className="grid grid-cols-3 gap-2">
            {existingImages.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Existing ${index + 1}`}
                  className="w-full h-20 object-cover rounded border"
                />
                <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Image Previews */}
      {selectedFiles.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2">New Images to Upload</h4>
          <div className="grid grid-cols-3 gap-2">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-20 object-cover rounded border"
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-sm text-gray-500">
        Total images: {totalImages}/{maxImages}
      </div>
    </div>
  );
};

export default ImageUpload;
