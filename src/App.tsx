import { RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Routers from './routes/Routes'

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={Routers} />
      <Footer />
    </>
  )
}

export default App
