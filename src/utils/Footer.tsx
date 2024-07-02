import {ChevronsRight,Instagram,Facebook,Linkedin,Twitter,Mail,Phone,MapPin} from "lucide-react"
export default function Footer() {
    return (
      <footer className="bg-black text-white">
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col items-center justify-center mb-6 md:mb-0 mt-4 w-96">
            <h2 className="text-2xl font-bold text-bgcust poppins-bold mt-4">eLearning</h2>
            <div className="flex space-x-4 mt-8">
              <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" aria-label="Pinterest">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 inter-medium">
            <div>
              <h3 className="text-lg font-semibold inter-bold">Explore</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Events</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Courses</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold inter-bold">Useful Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Terms of use</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2">
                    <ChevronsRight className="w-4 h-4" />
                    <span>Refund Policy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold inter-bold">Contact Info</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lorem ipsum is placeholder text commonly used in the graphic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-9024250272</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ednejfudicnx@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black text-center py-4 border-t border-gray-800 inter-medium">
          <p className="text-sm text-white ">Copyright © 2023 eLearning.com</p>
        </div>
      </footer>
    )
  }
  
 