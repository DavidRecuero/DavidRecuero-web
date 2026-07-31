import { useEffect, RefObject } from 'react';

export function useHeaderHeight(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrameId: number;

    const updateHeight = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ref.current) return;
        const height = element.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      });
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId); //Cleaning memory
    };
  }, [ref]);
}