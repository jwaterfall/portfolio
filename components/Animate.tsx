"use client";

import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimateVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom";
type AnimateDuration = "fast" | "normal" | "slow";

interface AnimateProps {
  variant?: AnimateVariant;
  duration?: AnimateDuration;
  delay?: number;
}

const Animate: FC<AnimateProps> = ({ children, variant = "fade-up", duration = "normal", delay = 0, ...props }) => {
  const [triggered, setTriggered] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (delay && inView) {
      const timeout = setTimeout(() => setTriggered(true), delay);
      return () => clearTimeout(timeout);
    }

    setTriggered(inView);
  }, [inView]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return "opacity-0 translate-y-4";
      case "fade-down":
        return "opacity-0 -translate-y-4";
      case "fade-left":
        return "opacity-0 translate-x-4";
      case "fade-right":
        return "opacity-0 -translate-x-4";
      case "zoom":
        return "opacity-0 scale-75";
    }
  };

  const getDurationStyles = () => {
    switch (duration) {
      case "fast":
        return "duration-300";
      case "normal":
        return "duration-500";
      case "slow":
        return "duration-700";
    }
  };

  return (
    <div ref={ref} className={`transition-all ${getDurationStyles()} ${triggered ? "" : getVariantStyles()} `} {...props}>
      {children}
    </div>
  );
};

export default Animate;
