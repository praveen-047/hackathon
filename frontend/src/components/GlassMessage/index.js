import{ useEffect, useState } from "react";
import "./index.css";

const GlassMessage = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div className={`glass-message ${visible ? "show" : ""}`}>
      <p>{message}</p>
      {visible && <div className="glass-progress" />}
    </div>
  );
};

export default GlassMessage;
