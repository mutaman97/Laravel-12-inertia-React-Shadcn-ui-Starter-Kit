'use client'

import LeftQuotation from '@/components/icons/left-quotation'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      const user = testimonials[index]
      return `<span class="${className}"><img src="${user.image}" alt="" /></span>`
    },
  }

  const swiperRef = useRef<any>(null)

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div className="bg-card mb-[120px] py-20 md:mb-[200px]">
      <div className="relative container px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <h4 className="mb-12 font-semibold">What Our Customer Says</h4>
          <Swiper
            loop={true}
            pagination={pagination}
            modules={[Pagination, Navigation]}
            className="aboutUsTestimonials relative"
            onSwiper={swiper => (swiperRef.current = swiper)}
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          >
            {testimonials.map((item, ind) => (
              <SwiperSlide key={ind + ind} className="pb-[30px]">
                <div className="relative px-6 pt-[60px]">
                  <LeftQuotation className="text-icon-active absolute top-0 left-1/2 h-6 w-10 -translate-x-1/2" />
                  <p className="text-secondary-foreground text-2xl font-medium">{item.comment}</p>

                  <div className="mt-[100px] md:mt-[180px]">
                    <p className="mb-2 text-lg font-semibold">{item.name}</p>
                    <p className="text-secondary-foreground">{item.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Button size="icon" variant="outline" className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 rounded-full" onClick={goPrev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button size="icon" variant="outline" className="custom-next absolute top-1/2 right-0 -translate-y-1/2 rounded-full" onClick={goNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: 'Lucian Obrien',
    designation: 'UX Designer',
    comment:
      'Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.',
    image: '/assets/profiles/Base.png',
  },
  {
    name: 'Reech Chung',
    designation: 'Full Stack Developer',
    comment:
      'Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.',
    image: '/assets/profiles/Base-1.png',
  },
  {
    name: 'Harrison Stain',
    designation: 'Marketer',
    comment:
      'Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.',
    image: '/assets/profiles/Base-2.png',
  },
  {
    name: 'Lainey Davidson',
    designation: 'UI Designer',
    comment:
      'Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.',
    image: '/assets/profiles/Base-3.png',
  },
  {
    name: 'David Miller',
    designation: 'Accountant',
    comment:
      'Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.',
    image: '/assets/profiles/Base.png',
  },
]
