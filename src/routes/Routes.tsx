import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurant_Page from '../pages/Restaurant'
import Market_Page from '../pages/Market'
import Drinks_Page from '../pages/Drinks'
import Pharmacy_Page from '../pages/Pharmacy'
import PetShop_Page from '../pages/Petshop'
import StoreRestaurant from '../pages/Restaurant/Store'
import StoreDrinks from '../pages/Drinks/Store'
import StorePharmacy from '../pages/Pharmacy/Store'
import StoreMarket from '../pages/Market/Store'
import StorePetshop from '../pages/Petshop/Store'

const Routers = createBrowserRouter([
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
  },
  {
    path: '/Restaurant/Store',
    element: <StoreRestaurant />
  },
  {
    path: '/Drinks/Store',
    element: <StoreDrinks />
  },
  {
    path: '/Pharmacy/Store',
    element: <StorePharmacy />
  },
  {
    path: '/Market/Store',
    element: <StoreMarket />
  },
  {
    path: '/Petshop/Store',
    element: <StorePetshop />
  }
])

export default Routers
