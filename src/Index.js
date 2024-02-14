import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routers from './routers'

const route = createBrowserRouter(routers)
const root  = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={route}/>)
