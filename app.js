function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paras Dang</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">Hi, I'm Paras Dang, a passionate Web Developer</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Get in Touch</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col items-center">
          <img src="profile.jpg" alt="Paras Dang" className="w-32 h-32 rounded-full mb-6 border-4 border-blue-600 object-cover" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            I'm Paras Dang, a dedicated web developer with a passion for creating innovative and user-friendly applications. 
            With expertise in modern web technologies, I strive to build impactful solutions. 
            Check out my profiles on <a href="https://www.linkedin.com/in/paras-dang-72994a24" className="text-blue-600 hover:underline">LinkedIn</a>, 
            <a href="https://github.com/parasdang8" className="text-blue-600 hover:underline">GitHub</a>, 
            <a href="https://www.geeksforgeeks.org/user/geeksfor2p2xd" className="text-blue-600 hover:underline">GeeksforGeeks</a>, and 
            <a href="https://leetcode.com/u/parasdang8" className="text-blue-600 hover:underline">LeetCode</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", 
    "Python", "SQL", "Git", "REST APIs", "Problem Solving"
  ];
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-blue-100 text-blue-800 text-center py-3 rounded-lg font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built with React and Tailwind CSS, showcasing responsive design and modern UI.",
      link: "https://github.com/parasdang8/project-one"
    },
    {
      title: "Project Two",
      description: "A full-stack app using Node.js and SQL for efficient data management and user interaction.",
      link: "https://github.com/parasdang8/project-two"
    }
  ];
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Email: <a href="mailto:dangparas5@gmail.com" className="text-blue-600 hover:underline">dangparas5@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Phone: <a href="tel:+917017123089" className="text-blue-600 hover:underline">+91 7017123089</a>
          </p>
          <p className="text-lg text-gray-700">
            Connect with me on <a href="https://www.linkedin.com/in/paras-dang-72994a24" className="text-blue-600 hover:underline">LinkedIn</a> or 
            check out my code on <a href="https://github.com/parasdang8" className="text-blue-600 hover:underline">GitHub</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2025 Paras Dang. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
