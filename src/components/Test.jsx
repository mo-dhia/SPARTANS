import React from "react";

const App = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div>
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
    </div>
  );
};

export default App;
