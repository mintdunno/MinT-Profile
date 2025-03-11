/**
 * Helper function to resolve image paths correctly in both development and production environments
 * @param relativePath Path relative to the assets directory
 * @returns Correct path to the image
 */
export function getImagePath(relativePath: string): string {
  // For local development
  if (import.meta.env.DEV) {
    return `/src/assets/${relativePath}`;
  }
  
  // For GitHub Pages deployment
  const basePath = '/MinT_Porfolio/';
  return `${basePath}assets/${relativePath}`;
}

// Use this helper in your components:
// import { getImagePath } from '@utils/imagePath';
// <img src={getImagePath('profile.jpg')} alt="Profile" />
