import './App.css';
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

//components
import Home from './components/Home'
import PieceGallery from './components/PieceGallery'
import About from './components/About'
import Blog from './components/Blog'
import RootLayout from './layouts/RootLayout'

// setting up the router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path='piecegallery' element={<PieceGallery />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='about' element={<About />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
