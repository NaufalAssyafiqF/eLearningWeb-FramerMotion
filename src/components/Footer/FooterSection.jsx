import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mdLgap-4">
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              et autem. Veniam obcaecati ad dicta impedit in iste enim
              consequatur ipsam eaque pariatur nulla quod voluptates omnis
              asperiores, perferendis provident.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Course</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    E-Learning
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>

            <div className="flex space-x-4 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-xl" />
              </a>
              <a href="#">
                <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-xl" />
              </a>
              <a href="#">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
