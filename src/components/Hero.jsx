const Hero = () => {
    return (
      <>
        {/* Navbar */}
        <header className="sticky top-0 bg-white shadow-md z-50">
          <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 text-sm md:text-base">
            <div className="font-bold text-xl text-white">Vansh Verma</div>
            <div className="space-x-4">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#certifications" className="hover:text-blue-600">Certifications</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-100 to-white px-6 md:px-20 scroll-smooth">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
            
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/vansh.jpg" // Replace with your image file
                alt="Vansh Verma"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg"  // Updated size for larger image
              />
            </div>
  
            {/* Intro Text */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Vansh Verma</h1>
              <p className="text-xl text-gray-700 mb-6">Mechanical Engineer | Problem Solver</p>
              <a href="#about">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Hero
  