import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ManageOrders from './Pages/AdminDashboard/ManageOrders/MangeOrders/ManageOrders';
import ProductPage from './Pages/Products/ProductPage/ProductPage';
import PlaceOrder from './Pages/PlaceOrderPage/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import UserDashBoard from './Pages/UserDashboard/UserDashboard/UserDashboard';
import AdminDashBoard from './Pages/AdminDashboard/AdminDashBoard/AdminDashBoard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/productPage">
              <ProductPage></ProductPage>
            </Route>
            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <PrivateRoute path="/userDashBoard">
              <UserDashBoard></UserDashBoard>
            </PrivateRoute>
            <PrivateRoute path="/adminDashBoard">
              <AdminDashBoard></AdminDashBoard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
