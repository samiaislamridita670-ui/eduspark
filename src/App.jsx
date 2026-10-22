import { useState } from "react";
import "./App.css";

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Development",
    instructor: "Alex Morgan",
    price: "$49",
    rating: "4.9",
    students: "2.4k",
    emoji: "💻",
    color: "blue",
    level: "Beginner",
    duration: "12 weeks",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Sarah Johnson",
    price: "$39",
    rating: "4.8",
    students: "1.8k",
    emoji: "🎨",
    color: "pink",
    level: "Beginner",
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Python Programming",
    category: "Development",
    instructor: "David Wilson",
    price: "$45",
    rating: "4.9",
    students: "3.1k",
    emoji: "🐍",
    color: "yellow",
    level: "Beginner",
    duration: "10 weeks",
  },
  {
    id: 4,
    title: "Digital Marketing Pro",
    category: "Business",
    instructor: "Emily Carter",
    price: "$35",
    rating: "4.7",
    students: "1.2k",
    emoji: "📈",
    color: "green",
    level: "All levels",
    duration: "6 weeks",
  },
  {
    id: 5,
    title: "React for Beginners",
    category: "Development",
    instructor: "Michael Lee",
    price: "$29",
    rating: "4.9",
    students: "2.7k",
    emoji: "⚛️",
    color: "purple",
    level: "Intermediate",
    duration: "7 weeks",
  },
  {
    id: 6,
    title: "Creative Graphic Design",
    category: "Design",
    instructor: "Olivia Brown",
    price: "$32",
    rating: "4.8",
    students: "980",
    emoji: "🖌️",
    color: "orange",
    level: "Beginner",
    duration: "5 weeks",
  },
];

const categories = [
  "All Courses",
  "Development",
  "Design",
  "Business",
];

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Courses" ||
      course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  function handleEnroll(course) {
    alert(
      `Thank you for your interest in ${course.title}!\n\nCourse enrollment will be available soon.`
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="brand">
<span>Edu<span className="brand-accent">Spark</span></span>
          <span>Edu<span className="brand-accent">Spark</span></span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About Us</a>
          <a href="#reviews">Reviews</a>
        </nav>

        <a href="#courses" className="nav-button">
          Explore Courses <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              YOUR FUTURE STARTS HERE
            </div>

            <h1>
              Learn Today.
              <br />
              <span>Lead Tomorrow.</span>
            </h1>

            <p className="hero-description">
              Unlock your potential with expert-led courses.
              Learn new skills, grow your confidence, and build
              the future you've always imagined.
            </p>

            <div className="hero-actions">
              <a href="#courses" className="primary-button">
                Explore Courses <span>→</span>
              </a>
              <a href="#about" className="secondary-button">
                Discover More <span>↗</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatar-stack">
                <span>👩🏻</span>
                <span>👨🏽</span>
                <span>👩🏽</span>
                <span>👨🏻</span>
              </div>
              <div>
                <strong>10,000+ learners</strong>
                <p>Growing their skills with us</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="learning-card">
              <div className="learning-top">
                <span className="live-dot"></span>
                YOUR LEARNING JOURNEY
                <span className="more-icon">•••</span>
              </div>

              <div className="illustration">
                <div className="sun"></div>
                <div className="floating-code">&lt;/&gt;</div>
                <div className="book book-one"></div>
                <div className="book book-two"></div>
                <div className="laptop">
                  <div className="laptop-screen">
                    <span className="code-line long"></span>
                    <span className="code-line medium"></span>
                    <span className="code-line short"></span>
                    <span className="code-line medium"></span>
                  </div>
                  <div className="laptop-base"></div>
                </div>
                <div className="plant">🌱</div>
                <div className="coffee">☕</div>
              </div>

              <div className="learning-bottom">
                <div>
                  <span className="small-label">YOUR NEXT CHAPTER</span>
                  <h3>Skills that open doors.</h3>
                </div>
                <div className="progress-circle">↗</div>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span className="badge-emoji">🎯</span>
              <div>
                <strong>Learn by doing</strong>
                <small>Practical projects</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="badge-emoji">🏆</span>
              <div>
                <strong>Achieve more</strong>
                <small>One lesson at a time</small>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar" id="about">
          <div className="stat">
            <strong>10K<span>+</span></strong>
            <p>Active Students</p>
          </div>
          <div className="stat">
            <strong>120<span>+</span></strong>
            <p>Online Courses</p>
          </div>
          <div className="stat">
            <strong>50<span>+</span></strong>
            <p>Expert Instructors</p>
          </div>
          <div className="stat">
            <strong>4.9<span>/5</span></strong>
            <p>Student Rating</p>
          </div>
        </section>

        <section className="courses-section" id="courses">
          <div className="section-heading">
            <div>
              <span className="section-kicker">LEARN SOMETHING NEW</span>
              <h2>Explore Our <span>Courses</span></h2>
              <p>
                Discover skills that matter and find the right course
                for your goals.
              </p>
            </div>

            <div className="course-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {filteredCourses.map((course) => (
              <article className="course-card" key={course.id}>
                <div className={`course-art ${course.color}`}>
                  <span className="course-category">{course.category}</span>
                  <span className="course-emoji">{course.emoji}</span>
                  <span className="course-level">{course.level}</span>
                </div>

                <div className="course-body">
                  <div className="course-rating">
                    <span>★ {course.rating}</span>
                    <span>{course.students} students</span>
                  </div>

                  <h3>{course.title}</h3>

                  <p className="instructor">
                    <span className="instructor-avatar">👨‍🏫</span>
                    {course.instructor}
                  </p>

                  <div className="course-meta">
                    <span>◷ {course.duration}</span>
                    <span>▣ Online</span>
                  </div>

                  <div className="course-footer">
                    <strong className="course-price">{course.price}</strong>
                    <button
                      className="enroll-button"
                      onClick={() => handleEnroll(course)}
                    >
                      Enroll Now <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <span>🔎</span>
              <h3>No courses found</h3>
              <p>Try another search or choose a different category.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Courses");
                }}
              >
                View All Courses
              </button>
            </div>
          )}

          <div className="all-courses">
            <button
              className="outline-button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Courses");
              }}
            >
              Explore All Courses <span>→</span>
            </button>
          </div>
        </section>

        <section className="cta-section" id="reviews">
          <div className="cta-decoration decoration-one"></div>
          <div className="cta-decoration decoration-two"></div>

          <div className="cta-content">
            <span className="section-kicker">YOUR JOURNEY BEGINS HERE</span>
            <h2>
              Ready to invest in
              <br />
              <span>your future?</span>
            </h2>
            <p>
              Start learning today. Every expert was once a beginner.
              Take your first step with EduSpark.
            </p>
            <a href="#courses" className="cta-button">
              Find Your Course <span>→</span>
            </a>
          </div>

          <div className="cta-art">
            <div className="cta-book">📚</div>
            <div className="cta-star">✦</div>
            <div className="cta-cap">🎓</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">E</span>
          <span>Edu<span className="brand-accent">Spark</span></span>
        </a>

        <p>Empowering learners. Inspiring futures.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} EduSpark. Educational demo project.
        </div>
      </footer>
    </div>
  );
}

export default App;