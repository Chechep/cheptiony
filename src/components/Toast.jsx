import React, { useEffect, useState } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => onClose(), 400); // wait for fadeOut animation
    }, 3000); // show for 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg transition 
        ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"} 
        ${closing ? "animate-fadeOut" : "animate-slideIn"} 
        dark:shadow-black/30 shadow-gray-500/30`}
    >
      {message}
    </div>
  );
};

export default Toast;
