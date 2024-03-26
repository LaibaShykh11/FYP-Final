import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './pages/Header'
import Hero from './pages/Hero'
import MobileNav from './pages/MobileNav'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Brands from './pages/Brands'
import Feature1 from './pages/Feature1'
import Feature2 from './pages/Feature2'
import Interview from './pages/Interview'
import Feature3 from './pages/Feature3'
import Feature4 from './pages/Feature4'
import Feature5 from './pages/Feature5'
import Footer from './pages/Footer'

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  return (
    <>
      <div className='overflow-hidden'>
        <div>
          <Toaster
            position='top-right'
            toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88',
                },
              },
            }}
          ></Toaster>
        </div>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />}></Route>
          </Routes>
        </BrowserRouter>
        <Interview />
        <Brands />
        {/* <div className='h-[4000px]'></div> */}
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Footer />
      </div>
    </>
  )
}

export default App
{
  /* <Route path='/' element={<Home />}></Route> */
}
{
  /*  <Route path='/Mainpage/:roomId' element={<Mainpage />}></Route> */
}
