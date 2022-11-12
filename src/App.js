import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
   <Navbar title='TextUtils'aboutText='About TextUtils'/>
   <div class="container"  >
   <Textform headings="Enter the Text Please"></Textform>
   </div>
   
   </>
  );
}

export default App;
