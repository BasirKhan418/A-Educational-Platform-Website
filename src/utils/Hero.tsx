import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <section className="bg-[#FCF8F1] dark:bg-black bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
               
                <h1 className="mt-4 text-3xl font-bold text-black dark:text-white lg:mt-8 sm:text-6xl xl:text-8xl inter-bold">
                 Best Offline Platform For Education
                </h1>
                <p className="mt-4 text-base text-black dark:text-gray-300 lg:mt-8 sm:text-xl inter-medium">
                Using highly personalised activities, videos and animations you can energise your students  energise your students. 
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-bgcust rounded-full   inter-medium"
                  role="button"
                >
                  Join for free
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-bgcust transition-all duration-200 border-2 border-bgcust mx-2 rounded-full   inter-medium"
                  role="button"
                >
                  Join for free
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                
              </div>
              <div>
              <div className='bg-bgcust flex justify-center items-center' style={{ height: '382px', width: '290px', borderRadius: '98.35px 98.35px 98.35px 6.15px' }}>
                <img src="https://s3-alpha-sig.figma.com/img/03f1/9e27/7131b8e23e07d648f5a34d8f6ddd3cff?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRN0lXk5lg~C2WxbKKKAl2rIH9bf~-zPVZ5rzKcezSO5hD~8wZhgRB9dPr8FicPgmJbOAq-1cTkEhccGBfA-F32Eya-ouVadsSoIRtB~LIT2E2mfG7TItsh8w6ckXEwjEchwOsw~WNSxvCzdALeipOEv3eidTopBwvZDROLUlVhowm7gmVCbwZoCQ5XjpZk8lR6vAqbGSAFh6CPQVodVdnhZf5CO6R9Xbx-6L2hS96nKEtwUN1Ak3ererCJH7RDuSjG3n40mttxCHJhTWyhd5ItJcYPVCac6g2dzHlNRQNOoSdu6IIFElRbqWiJorXyuXohOubrgLvO8F45OUwAofA__" alt="" className='object-cover h-96' />
</div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
