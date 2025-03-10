import { nanoid } from 'nanoid'
// import Image from "next/image";

const Demos = () => {
  return (
    <div className="container flex flex-col gap-24 px-4">
      {demos.map((demo, index) => (
        <div key={demo.id} className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
          {index === 1 ? (
            <>
              <img width={580} height={380} src={demo.images[0]} alt={demo.title} />

              <div className="max-w-[408px]">
                <span className="bg-card-hover -inset-px rounded-full bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 px-4 py-2 text-xl font-bold text-white">
                  {demo.badge}
                </span>
                <h6 className="mt-4 mb-2 font-semibold">{demo.title}</h6>
                <p>{demo.details}</p>
                <div className="group relative mt-6 inline-flex">
                  <div className="transitiona-all absolute rounded-xl bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 opacity-70 duration-1000 group-hover:opacity-100"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="font-pj relative mr-4 inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
                    role="button"
                  >
                    Get it now
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[408px]">
                <span className="bg-card-hover -inset-px rounded-full bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 px-4 py-2 text-xl font-bold text-white">
                  {demo.badge}
                </span>
                <h6 className="mt-4 mb-2 font-semibold">{demo.title}</h6>
                <p>{demo.details}</p>
                <div className="group relative mt-6 inline-flex">
                  <div className="transitiona-all absolute rounded-xl bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 opacity-70 duration-1000 group-hover:opacity-100"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="font-pj relative mr-4 inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
                    role="button"
                  >
                    Get it now
                  </a>
                </div>
              </div>

              <img width={580} height={380} src={demo.images[0]} alt={demo.title} className="rounded-2xl" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const demos = [
  {
    id: nanoid(),
    badge: 'Components',
    title: 'Select, Copy & Paste',
    details:
      "We've curated the best Figma components in one place. Discover, copy and paste UI components in Figma with the most efficient way to build designs.",
    images: ['/assets/images/intro/ui-components-light.png'],
  },
  {
    id: nanoid(),
    badge: 'Auto-layout',
    title: 'Figma variables , Auto Layout & more ',
    details: 'We use all latest figma features so that you can easily build a new page using all the components in minuites ',
    images: ['/assets/images/intro/auto-layout-light.png'],
  },
  {
    id: nanoid(),
    badge: 'Colorstyle',
    title: 'Easy Theme management',
    details: 'Choose your own theme and apply easily ',
    images: ['/assets/images/intro/color-variable-light.png'],
  },
]

export default Demos
