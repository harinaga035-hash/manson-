import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { ModalProvider } from "./components/ModalProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MobileActionBar } from "./components/MobileActionBar";
import { FloatingPanel } from "./components/FloatingPanel";
import { useScrollReveal } from "./hooks/useScrollReveal";

// Pages
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ProgramsPage } from "./pages/ProgramsPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { PlacementsPage } from "./pages/PlacementsPage";
import { FacultyPage } from "./pages/FacultyPage";
import { CampusLife } from "./pages/CampusLife";
import { IndustryConnect } from "./pages/IndustryConnect";
import { ResearchInnovation } from "./pages/ResearchInnovation";
import { EventsPage } from "./pages/EventsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { BlogNews } from "./pages/BlogNews";
import { ContactUs } from "./pages/ContactUs";

function MainAppContent() {
  const { pathname } = useLocation();

  // Initialize scroll reveal animations
  useScrollReveal();

  // Scroll to top on page route change
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div id="root-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/industry-connect" element={<IndustryConnect />} />
        <Route path="/research-innovation" element={<ResearchInnovation />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog-news" element={<BlogNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingPanel />
      <MobileActionBar />
    </div>
  );
}

export function App() {
  return (
    <ModalProvider>
      <HashRouter>
        <Routes>
          <Route path="*" element={<MainAppContent />} />
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
}
