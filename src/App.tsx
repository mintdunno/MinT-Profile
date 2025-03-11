import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import HireMePage from "./pages/HireMePage";
import { AppProvider } from "./context/AppContext";
import { LocalizationProvider } from "./context/LocalizationContext";
import { enableSmoothScroll, initPremiumAnimations } from "./utils/animations";
import { setupResponsiveMenu } from "./utils/responsiveHelper";
import GoToTopButton from "./components/GoToTopButton";

// Use environment variables for base URL
const baseUrl = import.meta.env.VITE_BASE_URL || "/";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Enable smooth scrolling
    enableSmoothScroll();

    // Initialize premium animations
    initPremiumAnimations();

    // Setup responsive menu behavior
    // Call the function but don't try to use its return value as a function
    setupResponsiveMenu();

    // No cleanup needed since setupResponsiveMenu handles its own cleanup
    return () => {
      // No cleanup needed here anymore
    };
  }, []);

  return (
    <AppProvider>
      <LocalizationProvider>
        <div className="app-container">
          <Routes location={location}>
            <Route path={`${baseUrl}`} element={<HomePage />} />
            <Route path={`${baseUrl}resume`} element={<ResumePage />} />
            <Route path={`${baseUrl}work`} element={<WorkPage />} />
            <Route path={`${baseUrl}contact`} element={<ContactPage />} />
            <Route path={`${baseUrl}hire-me`} element={<HireMePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <GoToTopButton />
        </div>
      </LocalizationProvider>
    </AppProvider>
  );
};

export default App;
