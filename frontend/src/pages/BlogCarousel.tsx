import { useRef } from "react";
import blog1 from "../assets/card1.png"

interface BlogCard {
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const blogData: BlogCard[] = [
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  {
    date: "April 15, 2025",
    category: "Technology",
    title: "Advancements in Modern Surveillance",
    description: "Explore how AI is revolutionizing modern surveillance systems and improving security outcomes.",
    image: blog1,
  },
  
  // ...other items
];

export default function BlogCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -330, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 330, behavior: "smooth" });
  };

  return (
    <section className="blog-section">
        <h2 className="blog-title">Latest Insights</h2>
        <p className="blog-subtitle">Stay updated with the latest in AI security technology</p>

        <div className="carousel-container">
    
            <button className="nav-btn left" onClick={scrollLeft}>
                &lt;
            </button>

            <div className="carousel-wrapper" ref={sliderRef}>
                {blogData.map((blog, index) => (
                <div className="blog-card" key={index}>
                    <img src={blog.image} className="card-image" />
                    <p className="card-meta">{blog.date} • {blog.category}</p>
                    <h3 className="card-title">{blog.title}</h3>
                    <p className="card-desc">{blog.description}</p>
                    <a href="#" className="card-link">Read more</a>
                </div>
                ))}
            </div>

            <button className="nav-btn right" onClick={scrollRight}>
                &gt;
            </button>
        </div>

    </section>
  );
}
