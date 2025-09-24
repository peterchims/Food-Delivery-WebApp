import { assets } from '../../assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Left */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab unde
            quae veniam possimus mollitia perferendis praesentium dolore sit
            commodi, et temporibus minima quasi perspiciatis eveniet laborum
            quis asperiores. Distinctio.
          </p>
          <div className="flex space-x-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-6 h-6 hover:opacity-80"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-6 h-6 hover:opacity-80"
            />
            <img
              src={assets.linkedln_icon}
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80"
            />
          </div>
        </div>

        {/* Center */}
        <div>
          <h2 className="text-lg font-semibold mb-3">COMPANY</h2>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-lg font-semibold mb-3">GET IN TOUCH</h2>
          <ul className="space-y-1 text-sm">
            <li>+234 818346382</li>
            <li>peter4tech@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
        Copyright 2024 &copy; Peter$Tech – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
