import { Profile } from '../../components/profile';
import template from './header.html'
class Header {

  loadHeader() {
    // Creata a new instance
    const profile = new Profile(); 
    
    // Invoke the method (component)
    profile.loadProfile();
    
    document.body.innerHTML = template;
    
    // Output loading status
    console.log('HEADer component is loaded...')
  }
  
}

export { Header };