import React from "react";
import { useSpring, animated } from "@react-spring/web";

const One = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { duration: 5000 },
  });
  return (
    <div>
      <animated.div
        style={{
          width: 40,
          height: 40,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </div>
  );
};

export default One;
