
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Shetty Realtors Logo" 
                className="w-12 h-6 object-contain"
              />
              <span className="text-lg font-bold text-yellow-primary">Shetty Realtors</span>
            </div>
            <p className="text-white/80 mb-4">
              With 30+ years of experience, Shetty Realtors is Pune’s trusted name in commercial property, office leasing, and co-working spaces. Having successfully leased over 20 lakh sq. ft., we specialize in delivering the right spaces for businesses to grow
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
              <p>
                <a 
                  href="mailto:Shettyrealtorspune@gmail.com" 
                  className="text-white/80 hover:text-yellow-primary transition-colors"
                >
                  📧 Shettyrealtorspune@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:9422005110" 
                  className="text-white/80 hover:text-yellow-primary transition-colors"
                >
                  📞 9422005110
                </a>
              </p>
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
