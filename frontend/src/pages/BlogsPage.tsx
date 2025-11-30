import HeroSection from "./HeroSection";
import BlogGrid from "./BlogGrid";
import Newsletter from "./Newsletter";

export default function BlogsPage() {
  return (
    <>
      <HeroSection />

      <section className="blogs">
        <h2 className="blogs-title">Latest Insights</h2>
        <BlogGrid />
      </section>

      <Newsletter />
    </>
  );
}