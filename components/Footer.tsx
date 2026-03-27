import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#fef9f7] relative">
      {/* Warm Soft Coral & Cream */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="w-full border-t border-gray-300">
        <footer className="bg-transparent max-w-360 mx-auto">
          <div className="container mx-auto px-4 py-10 md:px-6">

            {/* Top Section */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {/* About Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/cifse-logo-no-bg2.png"
                    alt="Central Institute of Fire and Safety Engineering Logo"
                    className="h-28 w-auto max-h-20"
                  />
                  <span className="font-bold text-lg leading-tight">
                    Central Institute of Fire and Safety Engineering
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leading the way in fire and safety engineering education since 2015.
                  Building safer communities through quality education.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#about" className="text-gray-600 hover:text-gray-900 transition">About Us</Link></li>
                  <li><Link href="#courses" className="text-gray-600 hover:text-gray-900 transition">Courses</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Admissions</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Faculty</Link></li>
                </ul>
              </div>

              {/* Programs */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Programs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Degree Programs</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Diploma Programs</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Certificate Courses</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition">Online Learning</Link></li>
                </ul>
              </div>

            </div>

            {/* Divider */}
            <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
              <p className="text-center sm:text-left">
                © {new Date().getFullYear()} Central Institute of Fire and Safety Engineering. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
                <Link href="#" className="hover:text-gray-900 transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-gray-900 transition">Terms of Service</Link>
                <Link href="#" className="hover:text-gray-900 transition">Accreditation</Link>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;