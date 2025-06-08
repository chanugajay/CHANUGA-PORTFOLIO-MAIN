
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Chanuga Jayarathne</h2>
            <p className="text-gray-400">BSc. (Hons) in Computer Science</p>
          </div>
          <div className="mb-6 md:mb-0">
            <SocialLinks iconSize={24} />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Chanuga Jayarathne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
