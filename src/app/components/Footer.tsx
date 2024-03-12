// components/Footer.js
import { Facebook, Instagram, GitHub  } from '@mui/icons-material';


export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-3 lg:mb-0">
              <a href="/" className="flex items-center">
                <img src="http://cdn.jsdelivr.net/gh/Bright2704/images/137240484_2799939723619280_1036868967874945007_n.png" alt="Your Logo" className="h-8 border flex rounded-full mr-3" />
                
                <div className="flex space-x-4">
                    
      <a href="https://www.facebook.com/profile.php?id=100008098389517" className="text-white hover:text-gray-400">
        <Facebook className="h-6 w-6" />
      </a>
      <a href="https://github.com/Bright2704" className="text-white hover:text-gray-400">
        <GitHub className="h-6 w-6" />
      </a>
      <a href="https://www.instagram.com/tnc_kt/" className="text-white hover:text-gray-400 mr-3">
        <Instagram className="h-6 w-6" />
      </a>
    </div>
                <span className="text-xl font-semibold whitespace-nowrap dark:text-white ml-3">The Tiger Team</span>
              </a>
              <p className="mt-2 text-sm text-gray-400">ทำงาน ทำงาน ทำงาน</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-300">Front end</h2>
                <ul className="text-gray-300 dark:text-gray-400">
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Marketing</a>
                  </li> */}
               
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-300">Back end</h2>
                <ul className="text-gray-300 dark:text-gray-400">
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Pricing</a>
                  </li> */}
                 
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-300">Infrastructure</h2>
                <ul className="text-gray-300 dark:text-gray-400">
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">About</a>
                  </li> */}
                
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-300">Devop</h2>
                <ul className="text-gray-300 dark:text-gray-400">
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Claim</a>
                  </li> */}
                 
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
          <span className="block text-sm text-gray-400 sm:text-center">© 2024 The Tiger Team Academy, Inc. All rights reserved.</span>
        </div>
      </footer>
    );
  }
  