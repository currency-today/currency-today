import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Home: React.FC = () => {
  return (
    <>
      <Nav />

      <div className="container mx-auto h-screen">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            Keep track of the currencies ups and downs with us!
          </h1>

          <button className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
            Sign Up
          </button>
          <a
            href="#"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            View Additional Action
          </a>
        </div>

        <div className="flex items-center w-full mx-auto content-end">
          <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
