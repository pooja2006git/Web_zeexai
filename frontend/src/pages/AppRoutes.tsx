import { Routes, Route } from "react-router-dom";
import HomePage from "./index";
import AboutPage from "./AboutPage";
import SolutionsPage from "./SolutionsPage";
import ServicesPage from "./services";
import BlogsPage from "./BlogsPage";
import ContactPage from "./ContactUs";
import CareersPage from "./CareersPage";
import PrivacyPage from "./Privacy";
import TermsPage from "./terms";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
