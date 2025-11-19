import '../PagesCss/Homepage.css'
import { Navigation } from '../Components/Navigation.jsx'
import { Home } from '../Components/Home.jsx'
 
function Homepage(){
    return(
        <div className='h-screen '>
            <Navigation/>
            <Home />
            
        </div>
    )
}

export default Homepage