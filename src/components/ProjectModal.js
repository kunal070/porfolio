import React, { useEffect, useState } from 'react'

const modalData = {
    "bosleo": {
        logo: "/img/logos/bosleo.png",
        title1: "BOSLEO TECHNOLOGY",
        title2: "DEVELOPER TRAINEE",
        title3: "JR ANGULAR DEVELOPER",
        para1: "I'm an JR Angular Developer at Bosleo Technology, honing my skills and contributing to innovative projects.",
        para2: "Bosleo Technology specializes in technology solutions for the healthcare domain, transforming ideas into impactful digital solutions.",
        link: "https://bosleo.com",
        image: "/img/angular.jpg",
        header: "EXPERIANCE"
    },
    "megh-technologies-2": {
        logo: "/img/logos/megh.png",
        title1: "MEGH TECHNOLOGIES",
        title2: "IDP Project for ERDA",
        title3: "MERN Stack Developer",
        para1: "At Megh Technologies, I contributed to the Membership Management project, showcasing my expertise in project development.",
        para2: "Proficient in both Backend and Frontend, I played a versatile role at Megh Technologies.",
        link: "https://membership-management.netlify.app",
        image: "/img/membership-management.png",
        header: "INTERNSHIP"
    },
    "megh-technologies-1": {
        logo: "/img/logos/megh.png",
        title1: "MEGH TECHNOLOGIES",
        title2: "Due Diligence",
        title3: "MERN Stack Developer",
        para1: "The Due Diligence project, an internal tool, enhances precise project selection at the firm.",
        para2: "Gained expertise in session management with React, Redux, Express-session, and OAuth during this valuable experience.",
        link: "https://megh-technologies-due-deligence.netlify.app",
        image: "/img/due-diligence.png",
        header: "INTERNSHIP"
    },
    "bdc": {
        logo: "/img/logos/bvm.png",
        title1: "BVM DEVELOPER CLUB",
        title2: "Internal College web-apps",
        title3: "MERN Stack Developer",
        para1: "Managed a ticket system for Udaan, the annual tech festival, accommodating 5200+ participants seamlessly.",
        para2: "Implemented a red-carpet voting system for Udaan, facilitating the engagement of 1000+ voters effortlessly.",
        link: "https://timely-kitten-7d0929.netlify.app",
        image: "/img/bdc.png",
        header: "INTERNSHIP"
    },
    "vnc": {
        logo: "/img/logos/vnc.png",
        title1: "VNC NGO",
        title2: "Tech Team Member",
        title3: "REACT Developer",
        para1: "Crafted the Croc-Watch website using React and Firebase, ensuring a dynamic and responsive user experience.",
        para2: "Integrated Google Maps API to highlight and showcase crocodile sites, deployed on GitHub Pages.",
        link: "https://app.crocodilecount.org",
        image: "/img/vnc.png",
        header: "INTERNSHIP"
    },
    "portfolio": {
        logo: "/img/logos/brawl-stars.jpg",
        title1: "PORTFOLIO",
        title2: "Brawl Stars based portfolio",
        title3: "FUN Project",
        para1: "Integrated react-three-fiber to enhance the portfolio with immersive 3D model interactions.",
        para2: "Transformed a gaming theme into a unique and engaging portfolio experience.",
        link: "https://app.crocodilecount.org",
        image: "/img/portfolio.png",
        header: "PROJECT"
    },
    "vatsalya-bakers": {
        logo: "/img/logos/v-b (1).jpg",
        title1: "VATSALYA BAKERS",
        title2: "Bakery Website",
        title3: "Deployed using AWS S3",
        para1: "Crafted a personalized bakery website with a touch of creativity through custom CSS.",
        para2: "Implemented a custom GitLab CI/CD pipeline integrated with AWS S3 for efficient and seamless deployment.",
        link: "http://vatsalya-bakers.s3-website-us-east-1.amazonaws.com",
        image: "/img/vatsalya-bakers.png",
        header: "PROJECT"
    },
    "sheet-management": {
        logo: "/img/logos/beast-adamant.jpg",
        title1: "SHEET MANAGEMENT",
        title2: "Inventory Management",
        title3: "Made with express & ejs",
        para1: "Tailored an inventory management system with search and Excel sheet generation capabilities for enhanced functionality.",
        para2: "Utilized Express for the backend, EJS for the frontend, and Bootstrap for a user-friendly and responsive UI.",
        link: "https://github.com/manavshah47/old-SHEET-MANAGMENT-",
        image: "/img/sheet-management.png",
        header: "PROJECT"
    },
    "ashish-corporation": {
        logo: "/img/logos/ashish-corporation.jpg",
        title1: "ASHISH CORPORATION",
        title2: "Custom Made Website.",
        title3: "Made with html & css",
        para1: "Designed and developed the web presence for ASHISH CORPORATION, incorporating self-created web pages.",
        para2: "An introductory project in web development, providing valuable experience in the web domain.",
        link: "https://ashish-corporation.netlify.app/",
        image: "/img/ashish-corporation.png",
        header: "PROJECT"
    }
}


const ProjectModal = ({ isModalOpen, modalContent, onClose }) => {

    const [data, setData] = useState(modalData.modalContent)

    useEffect(() => {
        setData(modalData[modalContent])
    }, [modalContent])

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className='modal'>
            <div className='w-11/12 lg:w-1/2 md:w-1/2 sm:w-11/12 border-bottom-light-blue bg-[#0f5de5]'>
                <h2 className='bg-[#248df6] py-3 text-lg text-center box-shadow-blue-after box-shadow-div'>
                    {data?.header} INFO
                    <div className="btn btn-red-bottom" style={{ width: "50px", height: "40px", float: 'right', position: 'relative', top: "-8px", right: '-8px' }} onClick={onClose}>
                        <p> X </p>
                    </div>
                </h2>
                <div className='border-black-small flex w-full h-80'>
                    <div className='w-1/2'>
                        <div className='mx-2 lg:mx-8 md:mx-8 sm:mx-2 border-blue-thick'>
                            <img src={data?.image} style={{ height: "250px", width: '100%' }} alt="" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className="flex w-full" >
                            <div className="left w-16">
                                <img src={data?.logo} className='logo-image' style={{ height: "60px" }} alt={`${data?.title1} logo`} />
                            </div>
                            <div className="right w-72 flex justify-center flex-col">
                                <div>
                                    <p className='text-lg lg:text-2xl md:text-2xl sm:text-lg'> {data?.title1} </p>
                                    <p className='text-sm bg-[#000000] py-0.5 px-2 skew-x-[-9deg] text-[#9ada49]'> {data?.title2} </p>
                                </div>
                                <div className='my-2'>
                                    <p className='text-md lg:text-xl md:text-xl sm:text-md'> {data?.title3} </p>
                                </div>
                                {window.innerWidth > 768 &&
                                    <>
                                        <div>
                                            <p className='text-sm'> {data?.para1} </p>
                                        </div>
                                        <div className='my-2'>
                                            <p className='text-sm'> {data?.para2} </p>
                                        </div>
                                    </>
                                }
                                <a href={data?.link} target='_blank' className="btn my-4 text-md" style={{ width: "100px", height: "40px", fontSize: '15px' }}>
                                    <p> Visit </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
