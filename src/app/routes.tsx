import { createHashRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { AllMenusPage } from '../pages/AllMenusPage'
import { TodayMenuPage } from '../pages/TodayMenuPage'
import { AboutPage } from '../pages/AboutPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <AllMenusPage /> },
      { path: 'gunun-menusu', element: <TodayMenuPage /> },
      { path: 'hakkinda', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
