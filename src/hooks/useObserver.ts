import { RefObject, useEffect, useState } from 'react';

interface UseObserver {
  itemRef: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
}

const useObserver = ({ itemRef: ref, options }: UseObserver) => {
  const [observed, setObserved] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (!ref.current) return;

    const intersect: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setObserved(true);
        } else {
          setObserved(false);
        }
      });
    };

    observer = new IntersectionObserver(intersect, {
      threshold: 0.7,
      ...options
    });

    observer.observe(ref.current);
  }, [options, ref]);

  return observed;
};

export default useObserver;
