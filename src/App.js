import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/onboarding/authProvider';
import Layout from "./components/layout/layout";
import DashboardPage from './pages/dashboard'
import Assets from './pages/assets'
import Operators from './pages/operators'
import Fuel from './pages/fuel'
import MapRoutes from './pages/routes'
import Maintenance from './pages/maintenance'
import Reports from './pages/reports'
import Settings from './pages/settings'
import Helpcenter from './pages/helpcenter'
import Logout from './pages/logout'


import SignIn from './components/onboarding/signIn/SignIn';
import Step1 from './components/onboarding/signUp/Step1';
import Step2 from './components/onboarding/signUp/Step2';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <AuthProvider>
        <Routes>

        <Route path="/" element={<SignedIn> <UserButton /></SignedIn>}  />
        <Route path="/login" element={<SignedOut> <SignInButton /></SignedOut>}  />

        <Route path="/dfdv" element={<SignedOut>    <Step1 /> </SignedOut>} /> 
        <Route path="/step" element={ <SignedOut> <Step2 /> </SignedOut>} /> 
        <Route path="/signin" element={<SignedOut> <SignIn /> </SignedOut> } /> 


       <Route path="/dashboard" element={<SignedIn> <Layout> <DashboardPage /> </Layout> </SignedIn>} />
      <Route path="/assets" element={<SignedIn>  <Layout>  <Assets/> </Layout> </SignedIn> } />  
      <Route path="/operators" element={<SignedIn>  <Layout> <Operators/> </Layout> </SignedIn> } /> 
      <Route path="/fuel" element={<SignedOut>  <Layout> <Fuel/> </Layout> </SignedOut> } />      
      <Route path="/routes" element={<SignedOut>  <Layout> <MapRoutes/> </Layout> </SignedOut> } />         
      <Route path="/maintenance" element={<SignedOut> <Layout> <Maintenance/> </Layout> </SignedOut>   } />
      <Route path="/reports" element={<SignedOut> <Layout> <Reports/> </Layout> </SignedOut>   } />
      <Route path="/settings" element={<SignedOut> <Layout> <Settings/> </Layout> </SignedOut>   } />
      <Route path="/helpcenter" element={<SignedOut> <Layout> <Helpcenter/> </Layout> </SignedOut>   } />
      <Route path="/logout" element={<SignedIn> <Layout> <Logout/> </Layout>  </SignedIn>  } />

        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
