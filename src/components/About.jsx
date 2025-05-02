import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate(`/`)

  }

  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-about">
      <div className="h-full overflow-y-scroll">
        <div className="btn back-btn" onClick={goHome}>
          <p className='text-5xl'> &lt; </p>
        </div>
        {/* <!--Nav--> */}
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-end">
            {/* <p className="flex items-center text-[#EEC308] no-underline hover:no-underline font-bold text-2xl lg:text-4xl mx-4">
            Manav Shah
          </p> */}

            <div className="flex w-1/2 justify-end content-center">
              <a className="inline-bloc no-underline text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://stackoverflow.com/users/20501701/manav-shah">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack-overflow" viewBox="0 0 16 16">
                  <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z" />
                  <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z" />
                </svg>
              </a>
              <a
                className="inline-block no-underline text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://github.com/manavshah47"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 32 32">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!--Main--> */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row  items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start px-8 lg:pl-16 lg:pr-0 text-justify">
            {/* <h2 className='text-2xl text-[#FF7A7B]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae dicta voluptatem aliquam nesciunt pariatur? </h2> */}
            <div className='bg-gray-900 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-2xl text-[#EEC308] text-center w-full'> "Man is a product of its environment" </h2>
            </div>
            <p className='mt-4 text-white'>
              Once upon a time, in the pixelated landscapes of GTA Vice City and the adrenaline-fueled streets of NFS Most Wanted,
              a young mind was captivated by the magic of gaming.

              Little did I know that those immersive experiences would spark a flame of curiosity within me, igniting a passion for the world of coding.
              Fast forward to today, and at the age of 20, I find myself on a journey of exploration after earning my BVM degree.


            </p>
            <p className='my-4 text-white'>
              In the realms of literature, "The 5 People You Meet in Heaven" by Mitch Albom has become my cherished companion.
              This profound book has taught me to trust the process, to embrace the journey with open arms, and find meaning in every step forward.
            </p>

            <p className='mb-4 text-white'>            Each line of code is a stroke of art, a manifestation of the ideas that once bloomed during those gaming sessions.
              This journey is not just about lines of code but about embracing the unknown, trusting the process, and constantly evolving.

            </p>

            <h2 className='text-xl text-[#7bd7ff] text-center w-full bg-gray-900 rounded-md px-8 pt-6 pb-8 mb-4'>"Win Everyday"</h2>
          </div>

          <div className="w-full xl:w-3/5 p-12">
            <img className="mx-auto w-3/5 md:w-3/5 rounded-full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]" placeholder='manav-shah' src="/img/manav-shah-3.jpg" />
          </div>
        </div>
      </div>
    </body>
  )
}

export default About
