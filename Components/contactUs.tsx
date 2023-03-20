import { useState } from "react";
import styles from "../styles/componentstyles/contactUs.module.scss";
import Link from "next/link";
import { SubmitButton } from "../Components/buttons";

const Contact = () => {
  return (
    <section className={`${styles.contactUsDesktopbg}`}>
      <div className="h-screen bg-gradient-to-br flex justify-center items-center w-full">
        <form className="mt-80">
          <div className="mb-12 lg:mb-0">
            <h2 className="block mb-4 text-white font-light text-3xl text-center">
              Contact Us
            </h2>
            <br />
            <br />
          </div>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4 font-light">
              <div>
                <label htmlFor="email" className="">
                  Name:
                </label>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email:
                </label>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email">Pricing Option</label>

                {/* <div className="border-none"> */}
                <select className="border-none w-full mt-4">
                  <option value="1">Classic</option>
                  <option value="2">Advanced</option>
                  <option value="3">Premium</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                  {/* </div> */}
                </div>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  // placeholder="Type your message"
                  className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"></textarea>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center">
              {/* <SubmitButton /> */}
              {/* <a href="mailto:muoghaluijeoma@gmail.com" target="_blank"></a> */}
              <button
                type="submit"
                className="
                    
                       mt-4 w-40 bg-purple2 py-2 rounded-md text-lg tracking-wide text-white  
                        ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

// Mobile Section
export const ContactM = () => {
  return (
    <section className={`${styles.contactUsMobilebg}`}>
      <div className=" bg-gradient-to-br flex justify-center items-center w-full">
        <form className="mt-96">
          <div className="mb-12 lg:mb-0">
            <h2 className="block mb-4 text-white font-light text-3xl text-center">
              Contact Us
            </h2>
            <br />
            <br />
          </div>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4 font-light">
              <div>
                <label htmlFor="email" className="">
                  Name:
                </label>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email:
                </label>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email">Pricing Option</label>

                {/* <div className="border-none"> */}
                <select className="border-none w-full mt-4">
                  <option value="1">Classic</option>
                  <option value="2">Advanced</option>
                  <option value="3">Premium</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                  {/* </div> */}
                </div>
                <input
                  type="text"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 text-sm"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  // placeholder="Type your message"
                  className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-light text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"></textarea>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center">
              {/* <a href="mailto:muoghaluijeoma@gmail.com" target="_blank"> */}
              {/* <button
                type="submit"
                className="
                    
                       mt-4 w-40 bg-purple2 py-2 rounded-md text-lg tracking-wide text-white  
                        ">
                Submit
              </button> */}
              {/* </a> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
