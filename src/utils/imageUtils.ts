
// Utility function to convert Google Drive share links to direct image URLs
export const convertGoogleDriveUrl = (url: string): string => {
  // Check if it's a Google Drive URL
  if (url.includes('drive.google.com/file/d/')) {
    // Extract the file ID from the URL
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      // Convert to direct image URL
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  
  // If it's not a Google Drive URL, return as is
  return url;
};

// Function to process image URLs (convert Google Drive links and validate)
export const processImageUrl = (url: string): string => {
  if (!url || url.trim() === '') {
    // Return a default placeholder image if URL is empty
    return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
  }
  
  return convertGoogleDriveUrl(url.trim());
};
