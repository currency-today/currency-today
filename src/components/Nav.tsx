/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useState } from 'react'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { useTranslation } from 'react-i18next'

import colors from '../utils/colors'

const Nav: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR')

  const { i18n: i18nHook } = useTranslation()

  const handleChangeSelectedLanguage = useCallback(
    async (language: 'pt-BR' | 'en-US') => {
      setSelectedLanguage(language)

      await i18nHook.changeLanguage(language)
    },
    [i18nHook]
  )

  return (
    <nav
      id="header"
      className="top-0 z-30 w-full bg-slate-800 py-1 text-black lg:py-6"
    >
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between px-2 py-2 lg:py-6">
        <div className="flex items-center pl-4">
          <a
            className="text-2xl font-bold text-orange-600 no-underline hover:no-underline lg:text-4xl"
            href="#"
          >
            Currency Today
          </a>

          <div className="ml-4 flex items-center">
            <GiBrazilFlag
              onClick={() => {
                handleChangeSelectedLanguage('pt-BR')
              }}
              size={40}
              color={
                selectedLanguage === 'pt-BR'
                  ? colors.primary.green01
                  : colors.gray.dark02
              }
              className="mr-2 cursor-pointer hover:scale-110"
            />

            <GiUsaFlag
              onClick={() => {
                handleChangeSelectedLanguage('en-US')
              }}
              size={30}
              color={
                selectedLanguage === 'en-US'
                  ? colors.primary.green01
                  : colors.gray.dark02
              }
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </div>

        <div className="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            className="flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-green-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="z-20 mt-2 hidden w-full flex-grow p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:p-0"
          id="nav-content"
        >
          <ul className="list-reset flex-1 items-center justify-end lg:flex">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 font-bold text-orange-600 no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="hover:text-underline inline-block py-2 px-4 text-orange-400 no-underline hover:text-gray-800"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="hover:text-underline inline-block py-2 px-4 text-orange-400 no-underline hover:text-gray-800"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto mt-4 rounded py-4 px-8 font-extrabold text-gray-800 opacity-75 shadow hover:underline lg:mx-0 lg:mt-0"
          >
            Action
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
