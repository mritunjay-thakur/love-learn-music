"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6 mt-8 text-neutral-400">
            <a
              href="https://www.linkedin.com/in/mritunjay-thakur-jay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-transform duration-300 hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mritunjay-thakur/mritunjay-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-transform duration-300 hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/___jaythakur___"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-transform duration-300 hover:scale-110"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 110085</p>
          <p>Email: mritunjaythakur903@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
