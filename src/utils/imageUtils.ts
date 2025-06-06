
// Utility function to convert Google Drive share links to direct image URLs
export const convertGoogleDriveUrl = (url: string): string => {
  console.log('Converting Google Drive URL:', url);
  
  // Check if it's a Google Drive URL with various possible formats
  if (url.includes('drive.google.com/file/d/')) {
    // Extract the file ID from different URL formats
    let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    
    if (match) {
      const fileId = match[1];
      console.log('Extracted file ID:', fileId);
      // Convert to direct image URL
      const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      console.log('Converted to direct URL:', directUrl);
      return directUrl;
    }
  }
  
  // Also handle Google Drive URLs with 'open?' format
  if (url.includes('drive.google.com') && url.includes('id=')) {
    const match = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      console.log('Extracted file ID from open format:', fileId);
      const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      console.log('Converted to direct URL:', directUrl);
      return directUrl;
    }
  }
  
  console.log('URL not a Google Drive link, returning as is:', url);
  // If it's not a Google Drive URL, return as is
  return url;
};

// Function to process image URLs (convert Google Drive links and validate)
export const processImageUrl = (url: string): string => {
  console.log('Processing image URL:', url);
  
  if (!url || url.trim() === '') {
    console.log('URL is empty, returning default image');
    // Return a default placeholder image if URL is empty
    return "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80";
  }
  
  const processedUrl = convertGoogleDriveUrl(url.trim());
  console.log('Final processed URL:', processedUrl);
  return processedUrl;
};
