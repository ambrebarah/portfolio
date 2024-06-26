function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-black text-white p-4 z-50">
        <ul className="flex justify-around">
          <li><a href="#home" className="hover:text-vibrantBlue">Home</a></li>
          <li><a href="#about" className="hover:text-vibrantPink">About</a></li>
          <li><a href="#projects" className="hover:text-vibrantGreen">Projects</a></li>
          <li><a href="#skills" className="hover:text-vibrantBlue">Skills</a></li>
          <li><a href="#contact" className="hover:text-vibrantPink">Contact</a></li>
          <li><a href="/path/to/CV.pdf" className="hover:text-vibrantGreen">Download CV</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  