import React, { useEffect, useState } from 'react'

const modalData = {
    "megh-technologies": {
        logo: "/img/logos/megh.png",
        title1: "MEGH TECHNOLOGIES",
        title2: "IDP Project for ERDA",
        title3: " MERN Intern",
        para1: "At Megh Technologies, I contributed to the Membership Management project, showcasing my expertise in project development.",
        para2: "Proficient in both Backend and Frontend, I played a versatile role at Megh Technologies.",
        link: "https://membership-management.netlify.app",
        image: "/img/membership-management.png",
        header: "INTERNSHIP"
    },
    "L-T": {
        logo: "/img/logos/L&T1.png",
        title1: "L&T Energy Hydrocarbon",
        title2: "Video Analytics",
        title3: "Automation and Data Intern",
        para1: "At L&T Energy Hydrocarbon, I deployed a Flask-based system to automate video analytics and streamline data processing workflows.",
        para2: "Using YOLO for object detection, I processed video data and built Power BI dashboards to display model results and performance trends.",
        link: "https://membership-management.netlify.app",
        image: "/img/membership-management.png",
        header: "INTERNSHIP"
    },
    "L-T-2": {
        logo: "/img/logos/L&T1.png",
        title1: "L&T Energy Hydrocarbon",
        title2: "FSR System",
        title3: "Software Intern",
        para1: "At L&T Engineering, I developed a web-based Supplier Supervision System using PHP and JavaScript to improve field activity tracking.",
        para2: "The application streamlined reporting, enabled real-time updates, and enhanced communication between suppliers and engineers.",
        link: "https://membership-management.netlify.app",
        image: "/img/fsr.png",
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
    "linux": {
        logo: "/img/logos/linux.png",
        title1: "File System",
        title2: "Distributed Linux Storage",
        title3: "C & Socket Programming",
        para1: "Led development of a distributed file system enabling organized storage across four simulated Linux servers.",
        para2: "Used socket programming for server communication and managed sprints to ensure on-time, modular delivery.",
        link: "https://app.crocodilecount.org",
        image: "/img/portfolio.png",
        header: "PROJECT"
    },
    "Student": {
        logo: "/img/logos/ml.png",
        title1: "Performance Predictor",
        title2: "Academic Risk Prediction System",
        title3: "Developed using Python",
        para1: "Developed a Python-based system to predict academic risk using models like Random Forest, SVR, and LSTM.",
        para2: "Visualized grade distributions and model results through Power BI and Matplotlib for early intervention insights.",
        link: "http://vatsalya-bakers.s3-website-us-east-1.amazonaws.com",
        image: "/img/Student.png",
        header: "PROJECT"
    },
    "Plan": {
        logo: "/img/logos/plan.png",
       "title1": "Price Intelligence",
       "title2": "Streaming Plan Recommender",
       "title3": "Java, Spring Boot & React",
       "para1": "Built a backend service with Java and Spring Boot to store and query streaming plan data using MySQL.",
       "para2": "Automated web scraping with Selenium and developed REST APIs for real-time price comparisons.",
        link: "https://github.com/manavshah47/old-SHEET-MANAGMENT-",
        image: "/img/streaming.jpg",
        header: "PROJECT"
    },
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
