import { Button  } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/chat",
    element:<Chat/>
  }
])

function App() {
 

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
