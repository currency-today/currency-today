import React from 'react'
import { formatToBRL } from 'brazilian-values'

import Translator from 'components/I18n/Translator'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Text from 'components/Text'
import CurrencyPicker from 'components/CurrencyPicker'
import Button from 'components/Button'

import colors from 'utils/colors'

const Home: React.FC = () => {
  return (
    <>
      <Nav />

      <div className="container mx-auto h-3/4 pt-16 md:w-3/4">
        <Text
          text={Translator('home.welcome')}
          color={colors.gray.white}
          marginTop={32}
          align="left"
          size={36}
          letterHeight={36}
          weight="700"
        />

        <div className="mt-4 w-full rounded-2xl bg-white">
          <div className="w-full rounded-t-2xl bg-neutralNeutral50 pt-3 pb-3 pl-4 pr-4">
            <Text
              text={Translator('navbar.priceOption')}
              color={colors.secondary.darkBlue}
              align="left"
              size={20}
              letterHeight={28}
              weight="600"
            />
          </div>

          <div className="p-4">
            <div className="flex w-full gap-2">
              <CurrencyPicker
                name="initialCurrency"
                label={Translator('home.fromText')}
                value="BRL"
              />

              <CurrencyPicker
                name="finalCurrency"
                label={Translator('home.toText')}
                value="USD"
              />
            </div>

            <div className="flex w-full items-end justify-between">
              <Button text={Translator('home.buttonText')} marginTop={16} />

              <div className="flex h-11 w-1/2 items-center justify-between rounded-lg border-2 border-dashed pl-2 pr-2">
                <Text
                  text={Translator('home.valueText')}
                  color={colors.neutral.neutral500}
                  align="left"
                  size={16}
                  letterHeight={20}
                  weight="500"
                />

                <Text
                  text={formatToBRL(5.19)}
                  color={colors.primary.orange}
                  align="left"
                  size={18}
                  letterHeight={20}
                  weight="700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="px-3 text-center lg:px-0">
          <h1 className="my-4 text-2xl font-black leading-tight md:text-3xl lg:text-5xl">
            {Translator('home.welcome')}
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

        <div className="flex w-full gap-2">
          <CurrencyPicker name="initialCurrency" label="From" value="BRL" />

          <CurrencyPicker name="finalCurrency" label="To" value="USD" />
        </div> */}

        {/* <div className="flex justify-end">
          <button className="mx-auto my-2 w-48 rounded bg-orange-500 py-4 px-8 font-extrabold text-gray-800 shadow-lg hover:underline md:my-6 lg:mx-0">
            {Translator('home.buttonText')}
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  )
}

export default Home
