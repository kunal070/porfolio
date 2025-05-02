import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { contactValidationSchema } from '../validation/contact.schema'
import { useFormik } from "formik";

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import CustomToast from './CustomToast';
import Leon from './characters/Leon';
import { useCharacterContext } from '../context/charcter.context';

let initialValues = {
  name: "",
  email: "",
  message: ""
}

const Contact = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const { character } = useCharacterContext()

  const adjustCharacterForScreeenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5]
      screenPosition = [-0.5, -2, -3]
    } else {
      screenScale = [5, 5, 5]
      screenPosition = [-0.5, -3.5, -3]
    }

    return [screenScale, screenPosition]
  }

  const [characterScale, characterPosition] = adjustCharacterForScreeenSize()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      const response = await axios.post(`https://mailserver-3mwc.onrender.com/api/mail-server/send-mail`, { ...values, backendEmail: 'manavshah0407@gmail.com' }, { headers: { "Content-Type": "application/json" } });
      toast(<CustomToast message={response.data.message} />, { limit: 1 })
      setLoading(false);
      action.resetForm();
    }
  })

  const goHome = () => {
    navigate(`/`)
  }

  return (
    <>
      <div className="btn back-btn" onClick={goHome}>
        <p className='text-5xl'> &lt; </p>
      </div>

      <div className='w-full h-full bg-contact'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full">
          <div className='md:w-3/5 w-full'>
            <div className='contact-div bg-5 lg:p-4 md:p-2 sm:p-2'>
              <h2 className='text-3xl lg:mb-5 text-center'>Connect With Me!</h2>
              <form onSubmit={handleSubmit} className="mt-4 md:mt-2 sm:mt-1.5">
                <div className="my-3 flex flex-col md:flex-row lg:gap-6 md:my-1 md:gap-3 sm:gap-0">
                  <label htmlFor="name" className="block mb-2 md:mb-1 sm:mb-0.5 text-sm md:text-sm font-medium">Name:</label>
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-[#174f61] placeholder-white focus:bg-[#174f61] focus:text-[#53bbe8] border border-black focus:border-transparent focus:ring-0 text-md md:text-lg block w-full p-2.5 md:p-1 sm:p-0.5"
                      autoComplete='off'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {(touched.name && errors.name) ? <p className='text-white text-sm md:text-sm'> {errors.name} </p> : <p className='text-sm md:text-md'>&nbsp;</p>}
                  </div>
                </div>
                <div className="my-3 flex flex-col md:flex-row lg:gap-6 md:my-1 md:gap-3">
                  <label htmlFor="name" className="block mb-2 md:mb-1 text-sm md:text-sm font-medium">Email:</label>
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="text-[#174f61] placeholder-white focus:bg-[#174f61] focus:text-[#53bbe8] border border-black focus:border-transparent focus:ring-0 text-md md:text-lg block w-full p-2.5 md:p-1 sm:p-0.5"
                      autoComplete='off'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {(touched.email && errors.email) ? <p className='text-white text-sm md:text-sm'> {errors.email} </p> : <p className='text-sm md:text-md'>&nbsp;</p>}
                  </div>
                </div>
                <div className="my-3 flex flex-col md:flex-row lg:gap-6 md:my-1 md:gap-3">
                  <label htmlFor="name" className="block mb-2 md:mb-1 sm:mb-0.5 text-sm md:text-md font-medium">MSG:</label>
                  <div className="flex-grow">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="text-[#174f61] placeholder-white focus:bg-[#174f61] focus:text-[#53bbe8] border border-black focus:border-transparent focus:ring-0 text-md md:text-lg block w-full p-2.5 md:p-1 sm:p-0.5"
                      autoComplete='off'
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {(touched.message && errors.message) ? <p className='text-white text-sm md:text-md'> {errors.message} </p> : <p className='text-sm md:text-md'>&nbsp;</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <div className={loading ? "btn btn-disabled md:w-32 w-60 sm:w-32" : "btn btn-blue md:w-32 w-60 sm:w-32"} style={{ margin: '8px', height: '40px' }}>
                    <button disabled={loading} className='text-md md:text-lg' type="submit">
                      {loading ?
                        <div role="status">
                          <svg aria-hidden="true" className="w-6 h-6 text-[#3b3a49] animate-spin dark:text-gray-600 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div> : 'SUBMIT'
                      } </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className='md:w-2/5 md:h-1/4 w-full h-full mt-6 md:mt-0'> */}
          <div className='lg:w-4/5 lg:h-2/4  md:w-2/5 md:h-1/4 mt-6 md:mt-0'>
            <Canvas
              camera={{ near: 2, far: 1000, position: [0, 0, 5] }}
            >
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <pointLight />
              <spotLight />
              <hemisphereLight skyColor="#b1e1ff" intensity={1} />

              <Suspense>
                <character.component
                  scale={characterScale}
                  position={characterPosition}
                  isContact={true}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
