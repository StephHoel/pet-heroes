import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { URL_BASE, url } from '@/constants/routes'
import { Home } from '@/pages/Home'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: url.index.replace(URL_BASE, ''),
          element: <Home />,
        },
        {
          path: url.notFound.replace(URL_BASE, ''),
          element: <Navigate to={'/'} replace={true} />,
        },
      ],
    },
  ],
  {
    basename: URL_BASE,
  },
)
