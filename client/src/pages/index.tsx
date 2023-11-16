import React from 'react'

function index() {
  return (
    <div className='px-24'>
      <nav className="py-4">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap 
                                dark:text-white">Ducun Music</span>
          </a>
          <div className="block w-auto">
            <ul className="font-medium flex p-4">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded
                                        hover:text-gray-400">Tools</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded
                                        hover:text-gray-400">About Us</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className='py-12'>

        <div className='pb-4'>
          <h1 className='text-[48px] drop-shadow text-gray-100 font-medium '>
            Music Is The Shorthand<br />Of Emotions
          </h1>

          <p className='text-medium text-gray-100'>
            It's our mission at Ducun Music to give you the opportunities<br />to help yout choose your best Emotions
          </p>
        </div>


        <div className="py-12">
          <div className="mx-auto grid max-w-7xl gap-y-20 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-medium text-white">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
            </div>
            <ul role="list" className="grid gap-y-12 ml-24 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2 ">
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Leslie Alexander</h3>
                    <p className="text-sm font-semibold leading-6 text-white">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Leslie Alexander</h3>
                    <p className="text-sm font-semibold leading-6 text-white">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Leslie Alexander</h3>
                    <p className="text-sm font-semibold leading-6 text-white">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default index