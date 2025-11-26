import '../PagesCss/Homepage.css'
import { Navigation } from '../Components/Navigation.jsx'
import { Home } from '../Components/Home.jsx'
import {Education} from '../Components/Education.jsx'
 
function Homepage(){
    return(
        <div className='h-screen '>
            <Navigation/>
            <Home />
            <Education />
            
        </div>
    )
}

export default Homepage