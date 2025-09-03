'use client'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaDownload, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { useState } from 'react'

const About = () => {
  const [isCopied, setIsCopied] = useState();

  const handleCopyClickMobile = () => {
    navigator.clipboard.writeText(mobile)
      .then(() => {
        setIsCopied(true);
      })
      .catch(error => {
        console.error('Error copying text:', error);
      });
  };

  const handleCopyClickEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
      })
      .catch(error => {
        console.error('Error copying text:', error);
      });
  };

  const handleCloseModal = () => {
    setIsCopied(false);
  };

  const mobile = "+6691-003-9370"
  const email = "muffin.naphat@gmail.com"
  return (
    <section id='about' className="mb-25 text-center sm:mb-25 text-black font-mono">
      <h2 className="text-3xl mb-5 mt-7 text-center font-mono">About Me</h2>
      <div className="flex flex-col items-center justify-center font-mono">
        <h1 className="mb-5 mt-4 sm:mb-5 sm:mt-5 px-4 font-medium">
          <span className='text-2xl sm:text-2xl font-bold'>Hello, My name is Naphat (Muffin)</span>
          <span className="mt-1 block sm:mt-1"></span>
          <span className='text-lg sm:text-xl'>I’m a focused and responsible developer who enjoys solving problems through hands-on learning </span>{" "}
          <span className='text-lg sm:text-xl'>I’m committed to completing every project I take on,</span>{" "}
          <span className='text-lg sm:text-xl'>and always ready to grow from new challenges.</span> {" "}
         </h1>
        <div className='flex gap-2 flex-wrap justify-center'>
          <button className="flex p-4 hover:text-gray-950 items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            onClick={() => document.getElementById('email').showModal()}>
            <SiGmail className='text-3xl' />
          </button>
          <dialog id="email" className="modal modal-middle sm:modal-middle">
            <div className="modal-box text-black bg-slate-100">
              <h3 className="font-mono font-semibold text-2xl">EMAIL ADDRESS</h3>
              <div className="sm:flex sm:flex-col sm:justify-center sm:gap-2">
                <p className="py-4 px-4 font-mono text-lg sm:text-xl">{email}</p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-slate-300 text-black hover:text-white hover:bg-zinc-800" 
                  onClick={handleCloseModal}>Close</button>
                </form>
              </div>
              <div className='text-lg py-2 items-center px-2 absolute bottom-4 left-4'>
                {isCopied ? (
                  <span className="btn bg-slate-300 text-black sm:hover:text-white sm:visible invisible">
                    Copied
                  </span>
                  ) : (
                  <button
                    className="btn bg-slate-100 text-black hover:text-white sm:visible invisible"
                    onClick={handleCopyClickEmail}
                  >
                    Copy
                  </button>
                )}
              </div>
            </div>
          </dialog>
          <button className="flex p-4 hover:text-gray-950 items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            onClick={() => document.getElementById('moblie_phone').showModal()}>
            <BiSolidPhoneCall className='text-3xl' />
          </button>
          <dialog id="moblie_phone" className="modal modal-middle sm:modal-middle">
            <div className="modal-box text-black bg-slate-100">
              <h3 className="font-mono font-semibold text-2xl">MOBILE NUMBER</h3>
              <div className="sm:flex sm:flex-col sm:justify-center sm:gap-2">
                <p className="py-4 px-4 font-mono text-lg sm:text-xl">{mobile}</p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-slate-300 text-black hover:text-white hover:bg-zinc-800" 
                  onClick={handleCloseModal}>Close</button>
                </form>
              </div>
              <div className='text-lg py-2 items-center px-2 absolute bottom-4 left-4'>
                {isCopied ? (
                  <span className="btn bg-slate-300 text-black sm:hover:text-white sm:visible invisible">
                    Copied
                  </span>
                  ) : (
                  <button
                    className="btn bg-slate-100 text-black hover:text-white sm:visible invisible"
                    onClick={handleCopyClickMobile}
                  >
                    Copy
                  </button>
                )}
              </div>
            </div>
          </dialog>
          <a target='_blank' className="flex p-4 hover:text-gray-950 items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="https://www.linkedin.com/in/naphat-torungruengyos-2960b3378/">
            <BsLinkedin className='text-3xl' />
          </a>
           <a target='_blank' className="flex p-4 hover:text-gray-950 items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="https://github.com/NaphatTor">
            <FaGithub className='text-4xl' />
          </a>
          <a target='_blank' className="group bg-white ml-2 px-4 py-5 sm:py-2 flex p-2 hover:text-gray-950 items-center gap-1 rounded-full hover:scale-[1.15] cursor-pointer"
            href="http://localhost:8080/MyResume.pdf">
            <span className='flex font-mono text-lg'>My Resume <FaDownload className='text-xl ml-2' /></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About