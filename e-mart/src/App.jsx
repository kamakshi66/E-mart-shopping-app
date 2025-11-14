
import React from 'react'

import { Routes ,Route} from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import './App.css'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchPage from './stores/pages/WatchPage'
import BooksPage from './stores/pages/BooksPage'
import FridgePage from './stores/pages/FridgePage'
import TvPage from './stores/pages/TvPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import MenWear from './stores/pages/MenWear'
import Furniture from './stores/pages/Furniture'
import WomenDressingPage from './stores/pages/WomenDressingPage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './singles/ComputerSingle'
import BookSingle from './singles/BookSingle'
import WatchsSingle from './singles/WatchsSingle'
import AcSingle from './singles/AcSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import MenWearSingle from './singles/MenWearSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import WomenWearSingle from './singles/WomenWearSingle'
import TvSingle from './singles/TvSingle'
import KitchenSingle from './singles/KitchenSingle'



const App = () => {
  return (
    <div>
      <Routes>
      
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/kitchen' element ={<KitchenPage />}/>
        <Route path='/mobiles' element={<MobilePage />}/>
        <Route path='/computers' element = {<ComputersPage/>} />
        <Route path ='/books' element={<BooksPage />} />
        <Route path ='/fridge' element={<FridgePage />} />
        <Route path ='/tv' element={<TvPage />} />
        <Route path ='/speaker' element={<SpeakersPage />} />
        <Route path ='/watchs' element={<WatchPage />} />
        <Route path ='/menwear' element={<MenWear />} />
        <Route path ='/furniture' element={<Furniture />} />
        <Route path ='/ac' element={<AcPage/>} />
        <Route path ='/womenwear' element= {<WomenDressingPage/>} />

        <Route path='/cart' element ={<UserCart/>}/>
        <Route path ='/mobiles/:id' element = {<MobileSingle/>}/>
        <Route path= '/computers/:id' element ={<ComputerSingle />}/>

        <Route path = '/books/:id' element={<BookSingle/>}/>
        <Route path ='/watchs/:id' element={<WatchsSingle/>}/>


         <Route path ='/ac/:id' element={<AcSingle/>}/>
          <Route path ='/fridge/:id' element={<FridgeSingle/>}/>
           <Route path ='/furniture/:id' element={<FurnitureSingle/>}/>
            <Route path ='/men/:id' element={<MenWearSingle/>}/>
             <Route path ='/speaker/:id' element={<SpeakerSingle/>}/>
              <Route path ='/woman/:id' element={<WomenWearSingle/>}/>
               <Route path ='/tv/:id' element= {<TvSingle/>}/>
               <Route path ='/kitchen/:id' element= {<KitchenSingle/>}/>
              


      </Routes>
    </div>
  )
}

export default App
