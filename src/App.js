
import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
   <>
   <Navbar title='TextUtils'aboutText='About TextUtils'/>
   <div class="container"  >
   {/* <Textform headings="Enter the Text Please"></Textform> */}
   </div>
   <About/>
   </>
  );
}

export default App;
