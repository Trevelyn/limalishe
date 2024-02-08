import React from "react";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Services from './components/pages/Services';
import Contactus from './components/pages/Contactus';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path= '/' exact component=
        {Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/services' component={Services} />
        <Route path='/contactus' component={Contactus} />
      </Switch>
    </Router>
  );
}

export default App;


