import React, { createContext, useContext, useState } from "react";

const WorkPopupContext = createContext();

export const useWorkPopup = () => {
  const context = useContext(WorkPopupContext);
  if (!context) {
    throw new Error("useWorkPopup must be used within a WorkPopupProvider");
  }
  return context;
};

export const WorkPopupProvider = ({ children }) => {
  const [isWorkPopupOpen, setIsWorkPopupOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(null);

  const openWorkPopup = (work) => {
    setActiveWork(work);
    setIsWorkPopupOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeWorkPopup = () => {
    setIsWorkPopupOpen(false);
    setTimeout(() => {
      setActiveWork(null);
      document.body.style.overflow = "auto";
    }, 500); // Wait for slide-out animation
  };

  return (
    <WorkPopupContext.Provider
      value={{
        isWorkPopupOpen,
        activeWork,
        openWorkPopup,
        closeWorkPopup,
      }}
    >
      {children}
    </WorkPopupContext.Provider>
  );
};
