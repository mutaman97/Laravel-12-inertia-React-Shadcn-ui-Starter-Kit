'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Image from "next/image";
import { nanoid } from 'nanoid'

const Teams = () => {
  return (
    <div className="container mb-[120px] px-4 md:mb-[200px]">
      <div className="mx-auto max-w-[496px] text-center">
        <h4 className="font-bold">Meet Our Team</h4>
        <p className="text-secondary-foreground font-medium">
          If you face any problem, our support team will help you within a business working day.
        </p>
      </div>

      <Swiper slidesPerView={4} spaceBetween={28} modules={[Pagination]} pagination={{ clickable: true }} className="teams relative">
        {teams.map(team => (
          <SwiperSlide key={team.id} className="py-12">
            <div className="bg-card rounded-2xl p-10 text-center">
              <img width={220} height={250} className="rounded-2xl" src={team.image} alt="shadcnkit" />
              <p className="mt-5 mb-2 text-lg font-semibold">{team.name}</p>
              <p className="text-secondary-foreground">{team.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const teams = [
  {
    id: nanoid(),
    name: 'Lucian Obrien',
    designation: 'UX Designer',
    image: '/assets/profiles/Base.png',
  },
  {
    id: nanoid(),
    name: 'Reech Chung',
    designation: 'Full Stack Developer',
    image: '/assets/profiles/Base-1.png',
  },
  {
    id: nanoid(),
    name: 'Harrison Stain',
    designation: 'Marketer',
    image: '/assets/profiles/Base-2.png',
  },
  {
    id: nanoid(),
    name: 'Lainey Davidson',
    designation: 'UI Designer',
    image: '/assets/profiles/Base-3.png',
  },
  {
    id: nanoid(),
    name: 'David Miller',
    designation: 'Accountant',
    image: '/assets/profiles/Base.png',
  },
  {
    id: nanoid(),
    name: 'Harrison Stain',
    designation: 'Marketer',
    image: '/assets/profiles/Base-2.png',
  },
  {
    id: nanoid(),
    name: 'Lainey Davidson',
    designation: 'UI Designer',
    image: '/assets/profiles/Base-3.png',
  },
]

export default Teams
