import './Sidebar.css';
import Nav from 'react-bootstrap/Nav';
import {BiCalendar} from 'react-icons/bi';
import {RxDashboard} from 'react-icons/rx';
import {HiDocumentReport} from 'react-icons/hi';
function Sidebar(){
    return(
     <div className="k1">
        <container>
        <Nav >
                 <div className='k2'> 
                            
                <Nav.Link href="#calendar"  >  <BiCalendar style={{color:'blue',fontsize:'25px'}} /> Calendar </Nav.Link>
                
                <Nav.Link href="#Dashboard"> <RxDashboard style={{color:'blue',fontsize:'25px'}} /> Dashboard</Nav.Link>
                   
                <Nav.Link href="#Reports">   <HiDocumentReport style={{color:'blue',fontsize:'35px'}} /> Reports</Nav.Link>
                  </div>
                  </Nav>
        </container>
     </div>
    );
}
export default Sidebar;


