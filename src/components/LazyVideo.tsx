import React from "react";
import { useInView } from "react-intersection-observer";

export interface LazyVideoProps {
  src: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <video autoPlay loop muted className="rounded-3xl">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
