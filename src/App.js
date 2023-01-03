import './App.css';
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

//components
import Home from './components/Home'
import Pieces from './components/Pieces'
import About from './components/About'
import Blog from './components/Blog'
import RootLayout from './layouts/RootLayout'

// setting up the router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path='pieces' element={<Pieces />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='about' element={<About />}/>
    </Route>
  )
)

function App() {
  return (
      //<Navbar />
    <RouterProvider router={router}/>
  );
}

export default App;