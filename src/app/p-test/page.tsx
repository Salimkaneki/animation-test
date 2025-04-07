"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img
          src={`/photos/cityscape/${id}.jpg`}
          alt="A London skyscraper"
          className="w-full h-screen object-cover"
        />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white mix-blend-difference"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="relative">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div
        className="progress fixed bottom-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX, originX: 0 }}
      />
      <style jsx global>{`
        html {
          scroll-snap-type: y mandatory;
        }
        
        .img-container {
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}