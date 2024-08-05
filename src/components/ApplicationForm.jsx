import { useContext, useRef, useState } from 'react'
import { FormContext } from './Context'
import { IoMdClose } from 'react-icons/io'
import emailjs from '@emailjs/browser';
import { ImSpinner11 } from 'react-icons/im';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import toast from 'react-hot-toast';

function ApplicationForm() {

    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedCourseError, setSelectedCourseError] = useState('')
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            course: selectedCourse,
            phone: '',
            email: '' 
        },
        validationSchema: Yup.object({
          firstname: Yup.string().required('firstname is required'),
          lastname: Yup.string().required('lastname is required'),
        //   course: Yup.string().required('course is required'),
          phone: Yup.number().required('only numbers can be added'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        validateOnChange: false,
        onSubmit: (values) => {
            if(!selectedCourse){
                setSelectedCourseError('you have to select a course');
                return
            }
          sendEmail()
          setSelectedCourseError('')
        },
      });

    const { displayForm, closeForm } = useContext(FormContext)

    const courses = ["Web Development", "UI/UX", "Data Science", "Cyber Security"]
    const [displayCourses, setDisplayCourses] = useState(false)


    const form = useRef();
    const [disableBtn, setDisableBtn] = useState(false)

  const sendEmail = (e) => {
    setDisableBtn(true)

    emailjs
      .sendForm('service_jayy97k', 'template_wa35nlm', form.current, {
        publicKey: 'ClYPUAtkrpd9RKHfY',
      })
      .then(
        () => {
        //   console.log('SUCCESS!');
          closeForm()
          setDisableBtn(false)
          formik.resetForm()
          setSelectedCourse('')
          setSelectedCourseError('')
          toast.success("Application submitted successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className={`fixed z-[999] flex items-center justify-center ${displayForm ? 'top-0' : 'top-[-100vh]'} left-0 w-full h-screen backdrop-brightness-75`} onClick={() => closeForm()}>
        
        <form ref={form} onSubmit={formik.handleSubmit} id='form' action="" className={`bg-white border border-[rgb(229,225,218)] w-10/12 max-w-[450px] px-5 rounded-[4px] py-4 overflow-y-scroll h-fit max-h-[98vh] md:h-screen md:max-h-[600px] ${displayForm ? 'scale-100 transition-all duration-300 delay-300 ease-in-out' : 'scale-0'}`} onClick={(e) => {
            e.stopPropagation()
            setDisplayCourses(false)
        }}>
            <span className="float-right cursor-pointer text-2xl" onClick={() => closeForm()}><IoMdClose /></span>
            <h1 className="text- text-xl mb-4 text-center px-10">Register To Start Your Career In Tech</h1>
            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Firstname</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder='Firstname'
                    id=""
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
                {formik.errors.firstname && <span className='text-sm text-red-600'>{formik.errors.firstname}</span>}
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Lastname</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder='Lastname'
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    id="" className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
                {formik.errors.lastname && <span className='text-sm text-red-600'>{formik.errors.lastname}</span>}
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id=""
                    placeholder='Phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
                {formik.errors.phone && <span className='text-sm text-red-600'>{formik.errors.phone}</span>}
            </div>

            <div className='mb-4 relative'>
                <div className="font-bold mb-1">Course</div>
                <div id="" className="w-full bg-transparent border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11 relative cursor-pointer flex items-center justify-between" onClick={(e) => {
                    e.stopPropagation()
                    setDisplayCourses(prev => !prev)
                }}>
                    <div>{selectedCourse ? selectedCourse : <span className='opacity-50'>Select Course</span>}</div>
                    <div className={`absolute z-30 left-0 top-[44px] bg-white shadow-xl w-full rounded-md ${displayCourses ? 'h-[150px] duration-300 delay-150 transition-all ease-in-out' : 'h-0' } overflow-hidden`}>
                        {
                            courses.map((course, i) => (
                                <div key={i} className={`text-sm h-1/4 border flex items-center hover:bg-[rgba(3,239,98,1)]  hover:text-white pl-4 ${selectedCourse === course ? 'bg-[rgba(3,239,98,1)] text-white' : '' }`} onClick={() => {
                                    setSelectedCourse(course)
                                }}>{course}</div>
                            ))
                        }
                    </div>
                    <input
                        type="text"
                        name="course"
                        id=""
                        value={selectedCourse}
                        className='hidden'
                    />
                </div>
                {selectedCourseError && <span className='text-sm text-red-600'>{selectedCourseError}</span>}
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Email Address</label>
                <input
                    type="text"
                    name="email"
                    id=""
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11"
                />
                {formik.errors.email && <span className='text-sm text-red-600'>{formik.errors.email}</span>}
            </div>

            <div className="relative border">
                <button disabled={disableBtn} type='submit'  className="w-full h-11 bg-[rgba(3,239,98,1)] rounded-[4px] font-bold">Submit</button>
                <i id='spin' className={`absolute left-1/2 top-[20%] ${disableBtn ? 'block' : 'hidden'} text-white -translate-y-1/2 -translate-x-1/2 text-2xl`}>
                <ImSpinner11 /></i>
            </div>
        </form>
    </section>
  )
}

export default ApplicationForm