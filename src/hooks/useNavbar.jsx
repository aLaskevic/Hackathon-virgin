import React from "react";
import { useNavbar } from "../context/NavbarContext";
import { Navigation } from "../components";

export default function Navbar() {
  const { isNavbarVisible } = useNavbar();

  if (!isNavbarVisible) return null; // Hide Navbar when false

  return <Navigation />;
}
