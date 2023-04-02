
import './App.css';
import Login from './components/login/Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/home/Home'
import ErrorPage from './components/errorpage/ErrorPage'
import RootLayout from './components/rootlayout/RootLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Investor from './components/investor/Investor';
import Mentor from './components/mentor/Mentor';
import Inv_req from './components/Inv_req/Inv_req';
import Men_req from './components/men_req/Men_req';
import login_mentor from './components/login_mentor/login_mentor'
import Login_invest from './components/login_invest/Login_invest'
import TeamUp from './components/teamup/teamup';
import One from './components/one/One';
function App() {

  const routerObj=createBrowserRouter([

    {
      path:'/',
      element:<RootLayout></RootLayout>,
      // errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Login></Login>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
      
      ]

    },
    {
      path:'/investor',
      element:<Investor></Investor>

    },
    {
      path:'/mentor',
      element:<Mentor></Mentor>
    },
    {
      path:'/inv_req',
      element:<Inv_req></Inv_req>
    },
    {
      path:'/men_req',
      element:<Men_req></Men_req>
    },
    {
      path:'/inv_login',
      element:<Login_invest></Login_invest>
    },
    {
      path:'/men_login',
      element:<login_mentor></login_mentor>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/teamup',
      element:<TeamUp></TeamUp>
    }
    ])
  
  return (


    <div className="App">
     <RouterProvider router={routerObj}></RouterProvider>
    </div>
  );
}

export default App;
