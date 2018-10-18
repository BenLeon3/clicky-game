import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import GameImages from "./components/Game/Images";




const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route path="/" component={Home} />
    
      <GameImages />
      <Footer />
    </div>
  </Router>
  
);


 

// class App extends Component {
//   state = {
//     score: [0]
//   }

// render() {
//   return (
//     <div className="App">
//       {/*<MainPage />*/}
//       <Navbar dayHandler = {this.dayHandler}/>
//       <Calendar dayHandler = {this.dayHandler} selectableDays = {this.state.selectableDays}/>
      
     
//     </div>
//   );
// }
// }  

export default App;
