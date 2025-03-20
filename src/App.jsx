import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, MyProjects, Profile, Project, Redeem } from "./pages";
import { AnimatePresence } from "framer-motion";
import { ProjectProvider } from "/src/contexts/ProjectContext";
import { NavbarProvider, useNavbar } from "./contexts/NavbarContext";
import ScrollToTop from "./components/ScrollToTop"; // Import the scroll behavior

function App() {
  return (
    <NavbarProvider>
      <ProjectProvider>
        <Router>
          <AppContent />
        </Router>
      </ProjectProvider>
    </NavbarProvider>
  );
}

// Extract App Content to Use `useNavbar()`
function AppContent() {
  const { isNavbarVisible } = useNavbar(); // Get navbar visibility state

  return (
    <>
      {isNavbarVisible && <Navigation />} {/* Conditionally Render Navbar */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/redeem" element={<Redeem />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
