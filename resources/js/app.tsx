import '../css/app.css'

import DefaultLayout from '@/layouts/app-layout'
import { createInertiaApp } from '@inertiajs/react'
import { ComponentType, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { route as routeFn } from 'ziggy-js'
import { initializeTheme } from './hooks/use-appearance'

interface PageModule {
  default: ComponentType<Record<string, unknown>> // Fixed type
  layout?: ComponentType<{ children: ReactNode }>
}

declare global {
  const route: typeof routeFn
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => {
    // Dynamically import the page component
    const pages = import.meta.glob<PageModule>('./pages/**/*.tsx', { eager: true })
    const page = pages[`./pages/${name}.tsx`]

    // Assign the default layout if no layout is specified
    if (page && page.default && !page.default.layout) {
      page.default.layout = DefaultLayout
    }

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)

    // Extract `key` separately before spreading props to avoid React warnings
    const { key, ...restProps } = props
    root.render(<App key={key} {...restProps} />)
  },
  progress: {
    color: '#4B5563',
  },
})

// This will set light / dark mode on load...
initializeTheme()
