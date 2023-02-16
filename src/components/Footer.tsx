import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 ">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2l lg:text-4xl"
              href="#"
            >
              Currency Today{' '}
              <span className="text-base">@{new Date().getFullYear()}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
