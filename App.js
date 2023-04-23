import Navbar from'./components/navbar/Navbar1';
import Sidebar from './components/sidebar/Sidebar';
import Form from './components/form/Form1';
import './App.css';

function App() {
return(
  
  <div className='App'>
  <Navbar/>
  
 <div className='App2'>
<Sidebar/> 
<div className='App1'>
<Form/>
</div>
  </div>
  </div>
)
}

export default App;
