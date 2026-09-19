import { useLayoutEffect } from 'react';

/**
 * Custom hook to lock body scroll when a modal is open.
 * Prevents layout shift by compensating for the scrollbar width.
 */
export function useScrollLock(isLocked) {
  useLayoutEffect(() => {
    if (!isLocked) return;

    // Get original styles
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;

    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Apply scroll lock and padding
    document.body.style.overflow = 'hidden';
    
    // Only add padding if there's a scrollbar to prevent layout shift
    if (scrollbarWidth > 0) {
      const currentPaddingRight = parseInt(originalPaddingRight || '0', 10);
      document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    // Prevent touch scrolling on iOS when modal is open
    // document.body.style.position = 'fixed';
    // document.body.style.width = '100%';
    // Note: Setting position fixed causes scroll reset to top on some browsers, so we avoid it unless strictly necessary.
    // Setting overflow: hidden is usually enough on modern iOS Safari.

    return () => {
      // Restore original styles
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
}
