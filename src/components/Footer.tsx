import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-neutralNeutral50 ">
      <div className="container m-2 mx-auto flex w-full flex-1  flex-col px-8 md:flex-row">
        <a
          className="text-sm font-bold text-primaryOrange no-underline hover:no-underline lg:text-sm"
          href="#"
        >
          Currency Today{' '}
          <span className="text-base">@{new Date().getFullYear()}</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
