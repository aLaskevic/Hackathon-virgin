import { createContext, useState, useContext } from "react";

// Create Context
const NavbarContext = createContext();

// Provider Component
export function NavbarProvider({ children }) {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, setNavbarVisible }}>
      {children}
    </NavbarContext.Provider>
  );
}

// Custom Hook for easy access
export function useNavbar() {
  return useContext(NavbarContext);
}
