import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { X, Upload, Image as ImageIcon } from 'lucide-react';

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
    
    // Create preview URLs for new files
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);
    
    onImagesChange(newFiles);
  }, [selectedFiles, maxImages, onImagesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif']
    },
    multiple: true,
    maxFiles: maxImages
  });

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    
    // Revoke the URL to prevent memory leaks
    if (previewUrls[index]) {
      URL.revokeObjectURL(previewUrls[index]);
    }
    
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
                PNG, JPG, WEBP, GIF up to 10MB each (max {maxImages} images)
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Current: {totalImages}/{maxImages} images
              </p>
              {existingImages.length > 0 && (
                <p className="text-xs text-blue-600 mt-1 font-medium">
                  ⚠️ New images will replace existing ones
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Existing Images */}
      {existingImages.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Existing Images ({existingImages.length})
            </h4>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="text-xs"
              onClick={() => onImagesChange([])}
            >
              Clear All
            </Button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {existingImages.map((url, index) => (
              <div key={`existing-${index}`} className="relative group">
                <img
                  src={url}
                  alt={`Existing ${index + 1}`}
                  className="w-full h-20 object-cover rounded border border-gray-200 dark:border-gray-600"
                />
                <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-medium">
                    Existing
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Selected Images */}
      {selectedFiles.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            New Images ({selectedFiles.length})
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {selectedFiles.map((file, index) => (
              <div key={`new-${index}`} className="relative group">
                <img
                  src={previewUrls[index]}
                  alt={`New ${index + 1}`}
                  className="w-full h-20 object-cover rounded border border-blue-300 dark:border-blue-600"
                />
                <div className="absolute top-1 right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  +
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  className="absolute top-1 left-1 w-5 h-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={() => removeFile(index)}
                >
                  <X className="w-3 h-3" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b">
                  {file.name.length > 15 ? file.name.substring(0, 15) + '...' : file.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Images Message */}
      {totalImages === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No images selected yet</p>
          <p className="text-sm">Upload some images to showcase your property</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
