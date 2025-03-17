
// Animation utility for intersection observer
export const createObserver = (
  animationClass: string, 
  threshold = 0.1,
  rootMargin = '0px'
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(`.${animationClass}`);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach(element => observer.observe(element));

  return observer;
};

// Animation delays for sequences
export const getDelayClass = (index: number, baseDelay = 100): string => {
  return `delay-${(index + 1) * baseDelay}`;
};
