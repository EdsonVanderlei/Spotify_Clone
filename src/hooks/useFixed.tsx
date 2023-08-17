import { RefObject, useEffect } from "react";

const useFixed = ({
  parent,
  child,
}: {
  parent: RefObject<HTMLDivElement>;
  child: RefObject<HTMLDivElement>;
}) => {
  const handleScroll = (e: Event) => {
    child.current!.style.top = `${parent.current!.scrollTop + 20}px`;
  };

  useEffect(() => {
    console.log("Loading");
    if (parent && parent.current) {
      parent.current?.addEventListener("scroll", (event) =>
        handleScroll(event)
      );
      return () => parent.current?.removeEventListener("scroll", handleScroll);
    }
  }, [parent.current, child.current]);

  return <div>useFixed</div>;
};

export default useFixed;
