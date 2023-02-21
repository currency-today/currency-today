import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SelectInput from '../components/SelectInput'

const Home: React.FC = () => {
  return (
    <>
      <Nav />

      <div className="container mx-auto h-3/4">
        <div className="px-3 text-center lg:px-0">
          <h1 className="my-4 text-2xl font-black leading-tight md:text-3xl lg:text-5xl">
            Keep track of the currencies ups and downs with us!
          </h1>

          {/* <button className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
            Sign Up
          </button>
          <a
            href="#"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            View Additional Action
          </a> */}
        </div>

        <div className="flex w-full gap-2">
          <SelectInput
            name="initialCurrency"
            label="From"
            options={[
              { label: 'T 0', value: '0' },
              { label: 'T 1', value: '1' },
            ]}
          />

          <SelectInput
            name="finalCurrency"
            label="To"
            options={[
              { label: 'T 0', value: '0' },
              { label: 'T 1', value: '1' },
            ]}
          />
        </div>

        <div className="flex justify-end">
          <button className="mx-auto my-2 w-48 rounded bg-orange-500 py-4 px-8 font-extrabold text-gray-800 shadow-lg hover:underline md:my-6 lg:mx-0">
            Calculate rate
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
