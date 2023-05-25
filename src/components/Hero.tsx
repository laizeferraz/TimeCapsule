import Image from 'next/image'

import logo from '../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="logo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Gather special moments of your journey and share them (if you wish)
          with the world!
        </p>
      </div>
      <a
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-secondary text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        REGISTER A MEMORY
      </a>
    </div>
  )
}
