import React from "react";

const EventHandlers = () => {
  const handleCick = () => {
    console.log("hello boy");
  };
  const handleCick2 = (name) => {
    console.log("tombol di klik lagi oleh", name);
  };
  return (
    <div className="border-t border-indigo-500 py-4">
      <h3 className="font-bold">Event Handlers</h3>
      <button onClick={handleCick} className="btn mt-4 mr-2">
        Helo
      </button>
      <button onClick={() => handleCick2("safwan")} className="btn mt-4">
        klik lagi
      </button>
    </div>
  );
};

export default EventHandlers;
