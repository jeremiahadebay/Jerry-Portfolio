import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white bottom-0 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Lets Connect there
          </h2>
          <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Hire me <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                J
              </div>
              <span className="font-bold text-xl">CREA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
              interdum ligula a dignissim.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <i className={`ri-${icon}-fill text-white text-sm`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+234 703 016 8568</li>
              <li>bamsonj@gmail.com</li>
              <li>jerry-portfolio-kappa.vercel.app/</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Get the latest information</h3>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-black outline-none text-sm"
              />
              <button className="bg-orange-500 px-4 py-2 hover:bg-orange-600 transition">
                <Mail className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-700 mt-10 mb-6" />
       <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
  <p>
    Copyright © {new Date().getFullYear()} Jerry. All Rights Reserved.
  </p>
  <p>
    User Terms & Conditions |{" "}
    <span className="underline cursor-pointer hover:text-white transition">
      Privacy Policy
    </span>
  </p>
</div>

      </div>
    </footer>
  );
}
