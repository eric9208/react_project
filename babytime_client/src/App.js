import { useState, useEffect } from 'react';
import './App.css';
import { User } from './requests';
import ActivityIndexPage from "./components/ActivityIndexPage"
import {Route, Routes} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import SignInPage from './components/SignInPage';
import NavBar from './components/NavBar';
import SignUpPage from './components/SignUpPage';
import { useNavigate } from 'react-router-dom'
import FormulaShowPage from './components/FormulaShowPage'
import SleepShowPage from './components/SleepShowPage';
import DiaperShowPage from './components/DiaperShowPage';
import AuthRoutes from "./components/AuthRoutes";
import BabyIndexPage from './components/BabyIndexPage';
import BabyNewPage from './components/BabyNewPage'
import BabyEditPage from './components/BabyEditPage';

function App() {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  
  useEffect(() => {
    getCurrentUser();
    
  }, [])

  const getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
       setUser(user)
       
      }
    });
  };

 

  const onSignOut = () => {
    setUser(null)
    navigate('/')
  }


  return (
    <>
    <NavBar currentUser={user} onSignOut={onSignOut}/>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      
      <Route exact path='/sign_in' element={<SignInPage onSignIn={getCurrentUser}/>} />
      <Route exact path='/sign_up' element={<SignUpPage onSignUp={getCurrentUser}/>} />
      <Route element={<AuthRoutes isAuthenticated={!!user} />}>
        <Route exact path='/activities' element={<ActivityIndexPage/>}/>
        <Route exact path='/baby' element={<BabyIndexPage/>}/>
        <Route exact path='/baby/new' element={<BabyNewPage/>}/>
      
      </Route>
      <Route  path='/baby/:id' element={<BabyEditPage/>}/>
        {/* <Route path='/baby/:id' element={<BabyIndexPage/>}/> */}
        <Route path='/sleep/:id' element={<SleepShowPage/>} />
        <Route path='/diaper/:id' element={<DiaperShowPage/>} />
        <Route path='/formula/:id' element={<FormulaShowPage/>} />
      {/* <Route element={<AuthRoutes isAuthenticated={!!this.state.user} />}>
        <Route exact path="/auctions/new" element={<NewAcutionPage />} />
      </Route> */}
      {/* <Route exact path="/auctions/bids" element={<NewBidForm />} /> */}
      {/* <Route exact path='/sign_up' element={<SignUpPage onSignUp={this.getCurrentUser}/>} />
      <Route path='/auctions/:id' element={<AuctionShowPage/>}/> */}

      
      
    </Routes>
    </>
  );
}

export default App;
