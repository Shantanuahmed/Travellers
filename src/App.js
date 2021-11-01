
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyBookings from './components/MyBookings/MyBookings';
import AllBookings from './components/AllBookings/AllBookings';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import PackageId from './components/PackageId/PackageId';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Tips from './components/Tips/Tips';
import New from './components/New/New';

function App() {
  return (
    <div className="container-fluid background">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
              <Banner></Banner>
              <Services></Services>
              <Tips></Tips>
              <New></New>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Banner></Banner>
              <Services></Services>
              <Tips></Tips>
              <New></New>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/packages/:packageId">
              <PackageId></PackageId>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <PrivateRoute path="/bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
