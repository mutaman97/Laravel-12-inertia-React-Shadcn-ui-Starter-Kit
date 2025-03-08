'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface AccordionProps {
  path: string
  icon: ReactNode
  name: string
  childItems: { name: string; path: string }[]
  active: boolean
  setActive: (value: any) => void
  activeItem: string | null
  setActiveItem: (value: any) => void
}

const Accordion = (props: AccordionProps) => {
  const { icon, name, path, childItems, active, setActive, activeItem, setActiveItem } = props

  const onItemClick = (item: string) => {
    if (item === activeItem) {
      setActiveItem(null)
    } else {
      setActiveItem(item)
    }
  }

  const [height, setChildHeight] = useState(0)
  const heightRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (heightRef.current) {
      setChildHeight(heightRef.current.clientHeight)
    }
  }, [])

  // useEffect(() => {
  //   if (activeItem) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // }, [activeItem]);

  return (
    <div>
      <div>
        <div className="flex cursor-pointer items-center justify-between bg-gray-200 p-4" onClick={() => onItemClick(path)}>
          <div>{name}</div>
          <div>{activeItem === path ? '[-]' : '[+]'}</div>
        </div>

        <div
          style={{
            height: active && activeItem === path ? `${height}px` : '0px',
          }}
          className="overflow-hidden border-gray-300 transition-all duration-300"
        >
          {childItems.map(({ name, path }, ind) => (
            <div key={ind} className="p-4" ref={heightRef}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
