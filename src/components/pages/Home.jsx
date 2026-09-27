import Navbar from "../layout/Navbar";
import "../styles/Home.css";
export default function Home() {
  return (
        <> 
        <Navbar/>
        
  <main className="home-page">
      {/* Hero section*/  }
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
             ✦ Trusted by 10,000+ Pilgrims
          </span>

          <h1> 
           Begin Your Sacred Journey{" "}
          <span>With Faith and Preparation</span> 
          </h1>

          <p>Prepare for your Hajj or Umrah journey with confidence.
            Ziyaarah brings your spiritual preparation, journey planning,
            and essential resources together in one place.</p>
        <div className="hero-buttons">
         <button className="btn btn-primary"
  onClick={() => alert("Welcome to the Ziyaarah community!")}
>
  Join Our Community
      </button>
      
          <button className="btn btn-secondary"> Watch Demo</button>
        </div>
        </div>
        <div className="hero-image">
        <img src="/images/makkah.png"/>

        {/* Journey Complete card */}
        <div className="journey-card">
            <span>✓</span>
         <div>
          <strong>Journey Complete</strong>
          <small>Your trip progress</small>
          </div>
          </div>
         {/* Sacred Journey card */}
        <div className="sacred-card">
          <span>✦</span>
        <div>
        <strong>Sacred Journey</strong>
        <small>Plan with confidence</small>
      </div>
      </div>
  </div>
      
      </section>
      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2>Everything You Need for Your Sacred Journey</h2>
          <p>Comprehensive tools and resources to help you prepare spiritually
 and practically.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            
              {/* Feature icon would go here */}
            
   <div className="feature-icon blue-icon">▣</div>
              <h3>Trip Planning</h3>
              <p>Organize your journey with detailed stage-by-stage planning and
        comprehensive checklists.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green-icon">✓</div>
              <h3>Ritual Tracker</h3>
              <p> Track mandatory and sunnah rituals with guided completion checklists
        and reminders.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon yellow-icon">▤</div>
              <h3>Learning Resources</h3>
              <p>Access authentic Islamic resources and educational materials for each
        journey stage.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange-icon">♧</div>

              <h3>Personal Dashboard</h3>
              <p> Monitor your progress with detailed insights and daily spiritual
        inspiration.</p>
            </div>
          </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="journey-header">
          <h2>Choose Your Sacred Journey</h2>
          <p>Tailored planning for both Hajj and Umrah pilgrimages.</p>
        </div>

        <div className="journey-cards">
          <button className="journy-arrow">‹</button>
          
          <div className="journey-option">
          <img src="/images/hajj.jpg" />
            <div className="journey-info">
              <h3>Hajj Pilgrimage</h3>
              <p>The greater pilgrimage - a once-in-a-lifetime spiritual journey.</p>
              <small>◷5-7 days comprehensive planning</small>
            </div>
          </div>

          <div className="journey-option">
           <img src="/images/umrahimages.jpg" />
            <div className="journey-info">
              <h3>Umrah Pilgrimage</h3>
              <p>The lesser pilgrimage - can be performed any time of year.</p>
              <small>◷5-7 days flexible planning</small>
            </div>
          </div>
          </div>
      </section>

{/* CTA BANNER  */}
<section className="cta-banner">
  <div className="cta-content">
     <div className="cta-text">
     <h2>Ready to Begin Your Spiritual Journey?</h2>
   <p> join thousands of Muslims who have prepared for their sacred
         journey with Ziyaarah. Start planning your Hajj or Umrah today
        with our comprehensive tools and guidance.</p>
 <button
  className="cta-btn"
  onClick={() => (window.location.href = "/register")}
>
  Create Your Account
</button>
  </div>
  </div>
  <div className="cta-image">
   <img src="/images/madinah.jpg" alt="Madinah" />
  </div>
</section>

 { /* Quick links */ }
 <section className="quick-links">
  <h2> Quick Links</h2>
  <div className="Quick-links">
    <h2> Quick links </h2>
    <div className="links-grid">
       <a href="#">Prayer Times</a>
    <a href="#">Quran Study</a>
    <a href="#">Community</a>
    <a href="#">Events</a>
    </div>
  </div>
 </section>

 { /* footer */}
 <footer className="footer">
  <div className="footer-logo" >
    <h3>🕌 Ziyaarah </h3>
    <div className="footer-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Resources</a>
    <a href="#">Contact</a>
  </div>
  <p>© 2026 Ziyaarah. All rights reserved.</p>
  </div>
 </footer>
 </main>
 </>
 );
}