import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
// import DailyMatchCard from "../Components/GameTypeCard/DailyMatchCard/DailyMatchCard";
import Error404 from '../pages/Error/Error404';
import Account from '../pages/Users/Account';
import AddMony from '../pages/AddMony/AddMony';
import ClassicMatch from '../pages/ClassicMatch/ClassicMatch';
import Login from '../pages/Login/Login';
import Withdraw from '../pages/Withdraw/Withdraw';
import SignUp from '../pages/Signup/SignUp';
import PrivetRoute from './PrivetRoute';
import JoinForm from '../Components/JoinForm/JoinForm';
import PendingAddMoney from '../Components/PendignRequest/PendingAddMoney';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/classicmatch',
        element: <ClassicMatch></ClassicMatch>,
      },
      {
        path: '/users',
        element: <Account></Account>,
      },
      {
        path: '/users/addmony',
        element: (
          <PrivetRoute>
            <AddMony></AddMony>
          </PrivetRoute>
        ),
      },
      {
        path: '/users/withdraw',
        element: (
          <PrivetRoute>
            <Withdraw></Withdraw>
          </PrivetRoute>
        ),
      },
      // {
      //   path: '/add_money_request',
      //   element: (
      //     <PrivetRoute>
      //       <PendingAddMoney></PendingAddMoney>
      //     </PrivetRoute>
      //   ),
      // },
      {
        path: '/classicmatch/joinform',
        element: (
          <PrivetRoute>
            <JoinForm></JoinForm>
          </PrivetRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
