/**
 * Centralized style utilities for consistent design patterns
 * This helps maintain consistency across components and makes updates easier
 */

export const buttonStyles = {
  primary: "bg-gradient-to-r from-accent to-primary text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
  secondary: "border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 font-semibold",
  ghost: "hover:bg-accent/10 hover:text-accent transition-all duration-300",
  outline: "border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 font-semibold"
} as const;

export const cardStyles = {
  modern: "modern-card hover-lift hover-glow cursor-pointer group overflow-hidden",
  glass: "glass border-border/50 overflow-hidden",
  gradient: "bg-gradient-to-br from-card to-muted border-border/50"
} as const;

export const iconStyles = {
  container: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent flex-shrink-0 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 hover-scale",
  small: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 text-accent flex-shrink-0 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 hover-scale"
} as const;

export const textStyles = {
  gradient: {
    accent: "bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",
    primary: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
  },
  hover: {
    accent: "group-hover:text-accent transition-colors duration-300",
    foreground: "group-hover:text-foreground/80 transition-colors duration-300"
  }
} as const;

export const animationStyles = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  bounceIn: "animate-bounce-in",
  staggered: (index: number) => `animate-slide-up` // Can be extended for staggered animations
} as const;

export const spacingStyles = {
  section: "py-16 md:py-24",
  container: "container",
  grid: {
    responsive: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    stats: "grid grid-cols-2 md:grid-cols-4 gap-6",
    footer: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
  }
} as const;

export const colorSchemes = {
  chart: {
    primary: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
    heatmap: ['#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b']
  }
} as const;

/**
 * Utility function to create consistent hover effects
 */
export const createHoverEffect = (baseClasses: string, hoverClasses: string = "") => {
  return `${baseClasses} transition-all duration-300 ${hoverClasses}`;
};

/**
 * Utility function for consistent gradient backgrounds
 */
export const createGradient = (from: string, to: string, direction: 'r' | 'br' | 'tr' = 'r') => {
  return `bg-gradient-to-${direction} from-${from} to-${to}`;
};

/**
 * Utility function for consistent spacing
 */
export const createSpacing = (type: 'padding' | 'margin', values: string[]) => {
  return values.map(value => `${type}-${value}`).join(' ');
};

