import '../css/app.css'

import DefaultLayout from '@/app/dashboard/layout'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ComponentType, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { route as routeFn } from 'ziggy-js'
import { initializeTheme } from './hooks/use-appearance'

interface PageModule {
  default: ComponentType<Record<string, unknown>> //  Fixed type
  layout?: ComponentType<{ children: ReactNode }>
}
declare global {
  const route: typeof routeFn
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

// createInertiaApp({
//   title: title => `${title} - ${appName}`,
//   resolve: name => {
//     // Dynamically import the page component
//     const pages = import.meta.glob<PageModule>('./pages/**/*.tsx', { eager: true })
//     const page = pages[`./pages/${name}.tsx`]
//
//     // Assign the default layout if no layout is specified
//     if (page && page.default.layout) {
//       page.default.layout = DefaultLayout
//     }
//
//     return page
//   },
//   setup({ el, App, props }) {
//     const root = createRoot(el)
//
//     root.render(<App {...props} />)
//   },
//   progress: {
//     color: '#4B5563',
//   },
// })

// createInertiaApp({
//   title: title => `${title} - ${appName}`,
//   resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
//   setup({ el, App, props }) {
//     const root = createRoot(el)
//
//     root.render(<App {...props} />)
//   },
//   progress: {
//     color: '#4B5563',
//   },
// })

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: async name => {
    const page = await resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'))

    // ✅ Set the default layout
    // If no layout is defined, set DefaultLayout
    page.default.layout = page.default.layout || (page => <DefaultLayout>{page}</DefaultLayout>)

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(<App {...props} />, el)
  },
  progress: {
    color: '#4B5563',
  },
})

// This will set light / dark mode on load...
initializeTheme()
