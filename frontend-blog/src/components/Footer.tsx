import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">My Blog</h2>
          <p className="mt-3 text-sm text-gray-400">
            Sharing insights, tutorials, and thoughts on web development, tech, and life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
