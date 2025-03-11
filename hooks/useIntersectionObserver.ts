import { useEffect } from "react";
import { useActiveSection } from "@/contexts";

export function useIntersectionObserver(sectionId: string, ref: React.RefObject<HTMLElement | null>) {
  const { updateHash } = useActiveSection();
  const options = {
    rootMargin: "0px 0px -500px 0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateHash(sectionId);
        }
      });
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, sectionId, updateHash, options]);
}
