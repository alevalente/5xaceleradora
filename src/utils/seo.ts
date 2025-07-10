export const getCanonicalUrl = (path: string, removeParams: boolean = true): string => {
  const baseUrl = 'https://5xaceleradora.com';
  
  if (removeParams) {
    // Remove query parameters for canonical URL
    const cleanPath = path.split('?')[0];
    return `${baseUrl}${cleanPath}`;
  }
  
  return `${baseUrl}${path}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  
  // Find the last space before the limit to avoid cutting words
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

export const validateSEO = (title: string, description: string) => {
  const issues = [];
  
  if (title.length < 45 || title.length > 61) {
    issues.push(`Title length should be 45-61 characters (current: ${title.length})`);
  }
  
  if (description.length < 120 || description.length > 158) {
    issues.push(`Description length should be 120-158 characters (current: ${description.length})`);
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};