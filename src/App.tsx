import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Restaurant_Page from './pages/Restaurant'
import Market_Page from './pages/Market'
import Drinks_Page from './pages/Drinks'
import Pharmacy_Page from './pages/Pharmacy'
import PetShop_Page from './pages/Petshop'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Restaurant',
    element: <Restaurant_Page />
  },
  {
    path: '/Market',
    element: <Market_Page />
  },
  {
    path: '/Drinks',
    element: <Drinks_Page />
  },
  {
    path: '/Pharmacy',
    element: <Pharmacy_Page />
  },
  {
    path: '/Petshop',
    element: <PetShop_Page />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
