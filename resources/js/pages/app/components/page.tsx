import { Card } from '@/components/ui/card'
import { Laptop, Layers, LayoutPanelTop } from 'lucide-react'
import { nanoid } from 'nanoid'

const Page = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h5>Welcome to components exploring</h5>
      <p className="mt-8 mb-16">
        Where functionality meets elegance, explore essential UI elements for seamless integration, elevating your design with versatile components.
        Dive in to discover the building blocks for a stunning interface.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {elements.map(({ id, title, Icon }) => (
          <Card key={id} className="flex flex-col items-center gap-5 p-5">
            <span className="bg-card-hover rounded-md p-2.5">
              <Icon strokeWidth={3} className="h-5 w-5" />
            </span>
            <p className="text-xl">
              <span className="font-semibold">{title}</span> Components
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

const elements = [
  {
    id: nanoid(),
    title: 'Layout',
    Icon: Layers,
  },
  {
    id: nanoid(),
    title: 'Landing',
    Icon: Laptop,
  },
  {
    id: nanoid(),
    title: 'Dashboard',
    Icon: LayoutPanelTop,
  },
]

export default Page
