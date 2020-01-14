// From component folder
// From layout folder
import { Header } from '../layouts/header/header';
import { Main } from '../layouts/main/main';



class Dashboard {

  loadDashboard(){

    // Create new instances
   
    const header = new Header();
    const main = new Main();

    header.loadHeader();
    main.loadMain();
    
    console.log('Dashboard component is loaded');
  }

}

export { Dashboard } 