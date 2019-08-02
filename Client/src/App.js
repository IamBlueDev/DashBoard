import React,{Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
// import './views/Dashboard/Dashboard';
import Dashboard from './views/Dashboard/Dashboard';
import ColorPreview from './colorPreview/colorPreview';

function initializeReactGA() {
  ReactGA.initialize('UA-145075487-1');
  ReactGA.pageview('/homepage');
  console.log("test");
}


class App extends Component {

  componentDidMount() {
  
    ReactGA.initialize('UA-145075487-1');
    // Send initial test view
    ReactGA.pageview('/admin');
  }
  // initReactGA = (event) => {
  //   event.preventDefault();
  
  //   ReactGA.initialize('UA-145075487-1');
  //   // Send initial test view
  //   ReactGA.pageview('test-init-pageview');
  //   console.log("test");
  // };
  render(){
  return (
    <div className="App">
    
    <Dashboard></Dashboard>
    <ColorPreview></ColorPreview>
    </div>
  );
  }
}

export default App;
