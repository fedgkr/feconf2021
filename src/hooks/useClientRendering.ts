import { useEffect, useState } from "react";

export const useClientRendering = () => {
  const [isClientRendering, setClientRendering] = useState(false);
  useEffect(() => {
    setClientRendering(true);
  }, []);
  return {
    isClientRendering: isClientRendering,
  };
};
