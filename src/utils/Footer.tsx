import {ChevronsRight,Instagram,Facebook,Linkedin,Twitter,Mail,Phone,MapPin} from "lucide-react"
import Banner from "./Banner"
export default function Footer() {
    return (
      
      <footer className=" text-white relative mt-4 lg:mt-20" style={{backgroundColor: "rgba(20, 20, 20, 1)"
      }}>
        <div className="flex justify-center items-center">
        <Banner/>
        </div>
        
        <div className="absolute top-0 left-0 lg:h-[161px] lg:w-[161px] ">
          <img src="https://s3-alpha-sig.figma.com/img/a882/5901/1ad79801565535bce92321fc3543c61a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaqwwZfCq8dEGw0gOs8YarIzOxkoGS3qVYe-8qk~NamuzEqSq0FAQbUQ2ZTD9lPTLhIvfYUQcaG3JxWUc9WhPqtVvW7AP-fYoOHQki5qi6vpP7vrvm8V4TiUV18zLPPyScsicWVihuxmO8jvpLxniwguPYTWnyo8Ai827my25eG2ytRvluD4CrkzCaeibrvfwV3qNZl8~s0Ea6lqk8NIK3RdfjCx2GaEkJ7k2jpnRfMgBb3EpdYo-sVrHiAaHWT1BGynXAfoRz1hah2B0ziNQVERe8cAknC9Y4RVgMB4qhxOTR1I18q-b6Rzm2th2fVW8YlbccB2E4hJSx9F-W2dXg__" alt="" />
        </div>
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-start md:items-center  ">
          <div className="flex flex-col items-center justify-center mb-6 md:mb-0 mt-4 w-96 p-4 lg:p-28 ">
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
              <ul className="mt-4 space-y-2 text-sm lg:w-[328px] lg:h-[53px]">
                <li className="flex items-start space-x-2 w-[250px]">
                  <MapPin className="w-8 h-8" />
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
          <div className="absolute bottom-0 right-0 h-[161px] w-[161px]">
          <img src="https://s3-alpha-sig.figma.com/img/a882/5901/1ad79801565535bce92321fc3543c61a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaqwwZfCq8dEGw0gOs8YarIzOxkoGS3qVYe-8qk~NamuzEqSq0FAQbUQ2ZTD9lPTLhIvfYUQcaG3JxWUc9WhPqtVvW7AP-fYoOHQki5qi6vpP7vrvm8V4TiUV18zLPPyScsicWVihuxmO8jvpLxniwguPYTWnyo8Ai827my25eG2ytRvluD4CrkzCaeibrvfwV3qNZl8~s0Ea6lqk8NIK3RdfjCx2GaEkJ7k2jpnRfMgBb3EpdYo-sVrHiAaHWT1BGynXAfoRz1hah2B0ziNQVERe8cAknC9Y4RVgMB4qhxOTR1I18q-b6Rzm2th2fVW8YlbccB2E4hJSx9F-W2dXg__" alt="" />
        </div>
        </div>
        <div className=" text-center py-4 border-t border-gray-800 inter-medium">
          <p className="text-sm text-white ">Copyright © 2023 eLearning.com</p>
        </div>
      </footer>
    )
  }
  
 