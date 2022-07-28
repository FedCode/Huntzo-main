//import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// import Navigation from './components/Navbar/Navbar';
import Bootom from './components/Footer/Footer';
import Slider from './components/Appslider/Slider';
import Howworks from './components/How-works/Howworks';
import Properties from './components/Explore-properties/Properties';
import Findlocation from './components/Location/Findlocation';
import Review from './components/Customer-reviews/Review';
import Pricing from './components/Pricing-pacakage/Pricing';
import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Header/Index'

function App() {
  return (

    <div className="App">
    <Topbar></Topbar> 
     <Navbar></Navbar> 
    {/* <Navbar></Navbar> */}
     <Slider></Slider>
     <Howworks></Howworks>
     <Properties></Properties>
     <Findlocation></Findlocation>
     <Review></Review>
     <Pricing></Pricing>
     
     
     <Bootom></Bootom>
     </div>
    
  );
}

export default App;
