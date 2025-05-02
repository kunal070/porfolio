import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectModal from './ProjectModal'

const Projects = () => {

  const navigate = useNavigate()

  const scrollRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(0)

  const adjustPositionBasedOnScreenSize = () => {
    let positionArray;

    if (window.innerWidth < 768) {
      positionArray = [0, 550, 1400]
    } else {
      positionArray = [0, 300, 800]
    }

    return positionArray
  }

  const projectPosition = adjustPositionBasedOnScreenSize()

  // state and function related to modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const experianceScroll = () => {
    setCurrentPosition(projectPosition[0])
    scrollRef.current.scrollTo({ left: projectPosition[0], behavior: "smooth" });
  }

  const internshipScroll = () => {
    setCurrentPosition(projectPosition[1])
    scrollRef.current.scrollTo({ left: projectPosition[1], behavior: "smooth" });
  }

  const personalProjectScroll = () => {
    setCurrentPosition(projectPosition[2])
    scrollRef.current.scrollTo({ left: projectPosition[2], behavior: "smooth" });
  }

  useEffect(() => {
    const el = scrollRef.current;

    const onWheel = e => {
      setCurrentPosition(el.scrollLeft + (e.deltaY * 3))
      el.scrollTo({
        left: el.scrollLeft + (e.deltaY * 3),
        behavior: "smooth"
      });
    };

    if (el) {
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [scrollRef]);

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <ProjectModal
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        onClose={closeModal}
      />

      <div className="btn back-btn" onClick={goHome}>
        <p className='text-5xl'> &lt; </p>
      </div>
      <div ref={scrollRef} className='w-full h-full bg-project p-16 flex gap-x-6 flex-nowrap overflow-x-scroll scrollbar-hidden'>
        <div className='project-div w-12/12 lg:w-8/12 md:w-8/12 sm:w-12/12'>
          <p className='title-p text-center py-2 text-lg'>EXPERIENCE</p>
          <div className='flex w-full'>
            <div className="flex flex-col w-full">
              <div className='single-project-div m-4' style={{ backgroundImage: 'url("/img/angular_2.jpg")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("bosleo")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> Since January 2024 </p>
                <div className="flex w-full border-div bg-1" style={{ gap: '15px' }}>
                  <div className="left w-24">
                    <img src="/img/logos/bosleo.png" className='logo-image' alt="megh-technologies logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className='text-2xl'> BOSLEO TECHNOLOGY </p>
                    <p className='text-md'> JR Angular Developer </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='project-div w-12/12 lg:w-8/12 md:w-8/12 sm:w-12/12'>
          <p className='title-p text-center py-2 text-lg'>INTERNSHIPS</p>
          <div className='flex w-full'>
            <div className="flex flex-col w-full">
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/membership-management.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("megh-technologies-2")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> July-December 2023 </p>
                <div className="flex w-full border-div bg-3" style={{ gap: '15px' }}>
                  <div className="left w-24">
                    <img src="/img/logos/megh.png" className='logo-image' alt="megh-technologies logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className='text-2xl'> MEGH TECHNOLOGIES </p>
                    <p className='text-md'> Membership Management </p>
                  </div>
                </div>
              </div>

              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/due-diligence.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("megh-technologies-1")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> May-June 2023 </p>
                <div className="flex w-full border-div bg-2" style={{ gap: "15px" }}>
                  <div className="left w-24">
                    <img src="/img/logos/megh.png" className='logo-image' alt="megh-technologies logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className="text-2xl"> MEGH TECHNOLOGIES </p>
                    <p className='text-md'> Due Diligence </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/bdc.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("bdc")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> 2022-2023 </p>
                <div className="flex w-full border-div bg-5" style={{ gap: '15px' }}>
                  <div className="left w-24">
                    <img src="/img/logos/bvm.png" className='logo-image' alt="bvm logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className='text-2xl'> BVM DEVELOPER CLUB </p>
                    <p className='text-md'> Tech Fest </p>
                  </div>
                </div>
              </div>
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/vnc.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("vnc")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> Since 2022 </p>
                <div className="flex w-full border-div bg-6" style={{ gap: "15px" }}>
                  <div className="left w-24">
                    <img src="/img/logos/vnc.png" className='logo-image' alt="vnc logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className="text-2xl"> VNC NGO </p>
                    <p className='text-md'> Croc-Watch </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className='project-div w-12/12 lg:w-8/12 md:w-8/12 sm:w-12/12'>
          <p className='title-p text-center py-2 text-lg'>PERSONAL PROJECTS</p>
          <div className='flex w-full'>
            <div className="flex flex-col w-full">
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/portfolio.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("portfolio")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> 2023 </p>
                <div className="flex w-full border-div bg-1" style={{ gap: '15px' }}>
                  <div className="left w-24">
                    <img src="/img/logos/brawl-stars.jpg" className='logo-image' alt="brawl stars logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className='text-2xl'> PORTFOLIO </p>
                    <p className='text-md'> Brawl Stars Inspired Portfolio </p>
                  </div>
                </div>
              </div>
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/vatsalya-bakers.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("vatsalya-bakers")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> 2022 </p>
                <div className="flex w-full border-div bg-5" style={{ gap: "15px" }}>
                  <div className="left w-24">
                    <img src="/img/logos/v-b (1).jpg" className='logo-image' alt="vatsalya bakers logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className="text-2xl"> VATSALYA BAKERS </p>
                    <p className='text-md'> Custom Made Bakery Website </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/sheet-management.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("sheet-management")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> 2022 </p>
                <div className="flex w-full border-div bg-2" style={{ gap: '15px' }}>
                  <div className="left w-24">
                    <img src="/img/logos/bvm.png" className='logo-image' alt="sheet management logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className='text-2xl'> SHEET MANAGEMENT </p>
                    <p className='text-md'> Personalized Inventory Management </p>
                  </div>
                </div>
              </div>
              <div className='two-project-div m-4' style={{ backgroundImage: 'url("/img/ashish-corporation.png")', backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                <span className="global-badge blue-badge" onClick={() => openModal("ashish-corporation")}>
                  <span className="inner-badge-text"> i </span>
                </span>
                <p className='p-gray'> 2021 </p>
                <div className="flex w-full border-div bg-3" style={{ gap: "15px" }}>
                  <div className="left w-24">
                    <img src="/img/logos/ashish-corporation.jpg" className='logo-image' alt="ashish-corporation logo" />
                  </div>
                  <div className="right w-72 flex justify-center flex-col">
                    <p className="text-2xl"> ASHISH CORPORATION </p>
                    <p className='text-md'> Tailor Made Website </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='project-footer flex justify-between w-full text-center py-2 text-lg'>
        <div className={`w-1/3 flex justify-center items-center ${currentPosition < projectPosition[1] ? "project-footer-current" : ""}`}>
          <span className='cursor-pointer' onClick={experianceScroll}> EXPERIENCE </span>
        </div>
        <div className={`w-1/3 flex justify-center items-center ${(currentPosition >= projectPosition[1] && currentPosition < projectPosition[2]) ? "project-footer-current" : ""}`}>
          <span className='cursor-pointer' onClick={internshipScroll}> INTERNSHIPS </span>
        </div>
        <div className={`w-1/3 flex justify-center items-center ${currentPosition >= projectPosition[2] ? "project-footer-current" : ""}`}>
          <span className='cursor-pointer' onClick={personalProjectScroll}> PERSONAL PROJECTS </span>
        </div>
      </div>
    </>
  )
}

export default Projects;