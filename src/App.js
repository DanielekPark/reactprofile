import React from 'react'; 
import {HashRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Resume from './Resume'
import Footer from './Footer';

function App() {
  return (
    <HashRouter>    
      <div className="wrapper">
        <Header />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route path="/about" render={() => <About />}/>
          <Route path="/projects" render={() => <Projects />}/>
          <Route path="/resume" render={() => <Resume />}/>
        </div>        
      </div>
      <Footer />      
    </HashRouter>
  );
}

export default App;