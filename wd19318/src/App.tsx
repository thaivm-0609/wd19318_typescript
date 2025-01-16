import { Children } from 'react'
import './App.css'
import Home from './pages/Home'
import { useRoutes } from 'react-router-dom'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

const routeConfigs = [
  {//router home
    path: "/", //url
    element: <Home/>, //khai báo file sẽ hiển thị
  },
  {//router detail
    path: '/detail',
    element: <Detail/>
  },
  {//router not found: khai báo cuối cùng
    path: '*',
    element: <NotFound/>
  }
]

function App() {
  const router = useRoutes(routeConfigs);

  return <div>{router}</div>
}

export default App
