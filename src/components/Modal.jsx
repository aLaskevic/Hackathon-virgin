import React from "react";

function Modal({ children, isOpen = false }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="h-screen w-screen bg-black/60 z-50 fixed top-0 left-0">
        <div class="w-11/12 h-8/12 relative left-1/2 transform -translate-1/2 top-2/6 bg-white rounded fade-in">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
