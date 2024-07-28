import { useContext, useRef, useState } from 'react'
import { FormContext } from './Context'
import { IoMdClose } from 'react-icons/io'
import emailjs from '@emailjs/browser';

function ApplicationForm() {

    const { displayForm, closeForm } = useContext(FormContext)

    
    const [selectedCourse, setSelectedCourse] = useState('')

    const courses = ["Web Development", "UI/UX", "Data Science", "Cyber Security"]
    const [displayCourses, setDisplayCourses] = useState(false)

    function resetForm(){
        const form = document.querySelector('#form')
        form.reset()
        setSelectedCourse('')
    }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jayy97k', 'template_wa35nlm', form.current, {
        publicKey: 'ClYPUAtkrpd9RKHfY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          resetForm()
          closeForm()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className={`fixed z-[999] flex items-center justify-center ${displayForm ? 'top-0' : 'top-[-100vh]'} left-0 w-full h-screen backdrop-brightness-75`} onClick={() => closeForm()}>
        <form ref={form} onSubmit={sendEmail} id='form' action="" className={`bg-white border border-[rgb(229,225,218)] w-10/12 max-w-[450px] px-5 rounded-[4px] py-4 overflow-y-scroll h-screen max-h-[600px] ${displayForm ? 'scale-100 transition-all duration-300 delay-300 ease-in-out' : 'scale-0'}`} onClick={(e) => {
            e.stopPropagation()
            setDisplayCourses(false)
        }}>
            <span className="float-right cursor-pointer text-2xl" onClick={() => closeForm()}><IoMdClose /></span>
            <h1 className="text- text-xl mb-4 text-center px-10">Register To Start Your Career In Tech</h1>
            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Firstname</label>
                <input type="text" name="firstname" id="" className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Lastname</label>
                <input type="text" name="lastname" id="" className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Phone</label>
                <input type="text" name="phone" id="" className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
            </div>

            <div className='mb-4 relative'>
                <div className="font-bold mb-1">Course</div>
                <div id="" className="w-full bg-transparent border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11 relative cursor-pointer flex items-center justify-between" onClick={(e) => {
                    e.stopPropagation()
                    setDisplayCourses(prev => !prev)
                }}>
                    <div>{selectedCourse ? selectedCourse : 'Select Course'}</div>
                    <div className={`absolute left-0 top-[44px] bg-white shadow-xl w-full rounded-md ${displayCourses ? 'h-[150px] duration-300 delay-150 transition-all ease-in-out' : 'h-0' } overflow-hidden`}>
                        {
                            courses.map((course, i) => (
                                <div key={i} className={`text-sm h-1/4 border flex items-center hover:bg-[rgba(3,239,98,1)]  hover:text-white pl-4 ${selectedCourse === course ? 'bg-[rgba(3,239,98,1)] text-white' : '' }`} onClick={() => {
                                    setSelectedCourse(course)
                                }}>{course}</div>
                            ))
                        }
                    </div>
                    <input type="text" name="course" id="" value={selectedCourse} className='hidden' />
                </div>
            </div>

            <div className='mb-4'>
                <label htmlFor="" className="block font-bold mb-1">Email Address</label>
                <input type="text" name="email" id="" className="w-full border border-[rgba(229,225,218,1)] px-4 rounded-[4px] h-11" />
            </div>

            <button className="w-full h-11 bg-[rgba(3,239,98,1)] rounded-[4px] font-bold">Submit</button>
        </form>
    </section>
  )
}

export default ApplicationForm