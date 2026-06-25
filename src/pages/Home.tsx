import './Home.css'

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Header />
      <HeroSection />
      <FloatingChatButton />
    </div>
  );
};

// Sub Components

const Header: React.FC = () => {
  const navLinks = ['Home', 'About Us', 'Services', 'Products', 'Contact'];
  return (
    <header className='header'>
      <div className='logo'>DAMIUNGO</div>
      <nav className='nav'>
        {navLinks.map(link => (
          <a key={link} href="#" className="nav-link">{link}</a>
        ))}
      </nav>
      <div className="auth-buttons">
        <a href="#" className="login-link">Login</a>
        <button className="signup-button">SignUp</button>
      </div>
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>WHERE IDEAS BECOME APPLICATIONS</h1>
        <p className='hero-subtitle'>Presenting Tomorrow's Technology Today</p>
        <div className='hero-cta-buttons'>
          <button className='cta-button'>Explore products</button>
          <button className='cta-button'>Explore services</button>
        </div>
      </div>
    </section>
  );
};

const FloatingChatButton: React.FC = () => {
  return (
    <button className="floating-chat" aria-label="Open chat">
      <svg
        viewBox="0 0 24 24"
        fill="black"
        width="24px"
        height="24px"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    </button>
  );
};



export default App
