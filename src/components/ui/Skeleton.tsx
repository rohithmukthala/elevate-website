'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

// Base skeleton with shimmer animation
export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-neutral-200 ${className}`}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ translateX: ['−100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: '-100%' }}
      />
    </div>
  );
}

// Text skeleton
export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

// Card skeleton for projects
export function SkeletonCard({ className = '' }: SkeletonProps) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      <Skeleton className="aspect-[16/10] w-full rounded-xl" />
      <div className="mt-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

// Avatar skeleton
export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return <Skeleton className={`${sizeClasses[size]} rounded-full`} />;
}

// Button skeleton
export function SkeletonButton({ className = '' }: SkeletonProps) {
  return <Skeleton className={`h-12 w-32 rounded-full ${className}`} />;
}

// Service card skeleton
export function SkeletonServiceCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="mt-4 h-6 w-1/2" />
      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

// Stats skeleton
export function SkeletonStats() {
  return (
    <div className="flex items-center gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  );
}
