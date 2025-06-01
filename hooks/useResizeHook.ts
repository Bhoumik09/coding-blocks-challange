import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
        console.log(window.innerWidth)
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[]);
  return width;
};
