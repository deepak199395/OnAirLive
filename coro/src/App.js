import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About';
import VideoCall from './Pages/VideoCall/VideoCall';
import Room from './Pages/VideoCall/Room';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/video/:id' element={<VideoCall/>}></Route>
      <Route path='/room' element={<Room/>}/>
      </Routes>
    </>
  )
}

export default App