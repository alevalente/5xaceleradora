
import React, { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';
import { images } from '../assets/images';

interface LogoWithTransparentBackgroundProps {
  className?: string;
  alt?: string;
}

const LogoWithTransparentBackground: React.FC<LogoWithTransparentBackgroundProps> = ({ 
  className = "h-16 md:h-20 lg:h-24 w-auto object-contain",
  alt = "IAgo Conversas"
}) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Fetch the original logo
        const response = await fetch(images.iagoConversasLogo);
        const blob = await response.blob();
        
        // Load as image element
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
        
      } catch (err) {
        console.error('Failed to process logo:', err);
        setError('Falha ao processar o logotipo');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke object URL
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !processedLogoUrl) {
    // Fallback to original logo if processing fails
    return (
      <img 
        src={images.iagoConversasLogo} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedLogoUrl} 
      alt={alt} 
      className={className}
    />
  );
};

export default LogoWithTransparentBackground;
