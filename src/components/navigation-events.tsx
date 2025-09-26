
'use client'
 
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false); // Start with false to prevent initial load
  const [navigationStartTime, setNavigationStartTime] = useState<number | null>(null);
  const MIN_LOADER_TIME = 1000;

  useEffect(() => {
    // When the path changes after a navigation, this runs.
    const handleRouteChangeComplete = () => {
      if (navigationStartTime) {
        const elapsedTime = Date.now() - navigationStartTime;
        const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsedTime);

        const timer = setTimeout(() => {
          setIsLoading(false);
          setNavigationStartTime(null);
        }, remainingTime);
        return () => clearTimeout(timer);
      } else {
        // This handles the initial page load where there's no navigation start time.
        setIsLoading(false);
      }
    };
    
    handleRouteChangeComplete();

  }, [pathname, searchParams, navigationStartTime]);

  useEffect(() => {
    // This effect handles showing the loader on link clicks
    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }
      
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        const targetAttr = target.getAttribute('target');

        // Ignore external links, anchor links, and links opening in a new tab
        if (!href || !href.startsWith('/') || href.includes('#') || targetAttr === '_blank') {
            return;
        }

        const currentUrl = new URL(window.location.href);
        const newUrl = new URL(href, window.location.origin);

        // Only trigger for actual navigation
        if (newUrl.pathname !== currentUrl.pathname || newUrl.search !== currentUrl.search) {
            setIsLoading(true);
            setNavigationStartTime(Date.now());
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  useEffect(() => {
      const pageLoader = document.getElementById('page-loader');
      const contentWrapper = document.getElementById('content-wrapper');

      if (isLoading) {
          document.body.classList.add('loading-active');
          if (pageLoader) pageLoader.style.display = 'flex';
          if (contentWrapper) contentWrapper.style.opacity = '0';

      } else {
          document.body.classList.remove('loading-active');
          if (pageLoader) pageLoader.style.display = 'none';
          if (contentWrapper) contentWrapper.style.opacity = '1';
      }
  }, [isLoading]);
 
  return null;
}
