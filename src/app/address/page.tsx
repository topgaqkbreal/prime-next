import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ryk.png" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          My home where I live is located near xyz restaurant, street-A, house 456, xyz town, Rahim Yar Khan.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          AbdulQadir
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Student
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page