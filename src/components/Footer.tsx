
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/52d0ead8-fce0-4e43-9b59-8105eea822a8.png" 
                alt="Shetty Realtors Logo" 
                className="w-12 h-6 object-contain"
              />
              <span className="text-lg font-bold text-yellow-primary">Shetty Realtors</span>
            </div>
            <p className="text-white/80 mb-4">
              Your trusted partner in real estate. Helping families find their perfect homes for over 15 years across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-yellow-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-white/80 hover:text-yellow-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-yellow-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-yellow-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-primary">Contact Info</h3>
            <div className="space-y-2 text-white/80">
              <p>📧 Shettyrealtorspune@gmail.com</p>
              <p>📞 9422005110</p>
              <p>📍 Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 Shetty Realtors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
