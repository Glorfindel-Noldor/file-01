import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routers from './Routers'

const route = createBrowserRouter(Routers)
const root  = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={route}/>)