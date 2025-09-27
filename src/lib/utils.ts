import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to handle external link clicks
 */
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Utility function to scroll to element by ID
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Utility function to handle navigation to components section
 */
export const navigateToComponents = () => {
  scrollToElement('components');
};

/**
 * Utility function to format numbers with proper suffixes
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Utility function to generate random chart data
 */
export const generateRandomData = (count: number, min: number = 0, max: number = 100) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * (max - min + 1)) + min
  }));
};

/**
 * Utility function to debounce function calls
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Utility function to throttle function calls
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Utility function to check if element is in viewport
 */
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Utility function to get color from value based on range
 */
export const getColorFromValue = (
  value: number,
  min: number,
  max: number,
  colorScale: string[]
): string => {
  if (max === min) return colorScale[0];
  const intensity = (value - min) / (max - min);
  const index = Math.floor(intensity * (colorScale.length - 1));
  return colorScale[Math.min(index, colorScale.length - 1)];
};

/**
 * Utility function to calculate percentage
 */
export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return Math.min((value / total) * 100, 100);
};