import template from './main.html';
class Main {
  loadMain() {
    
    document.body.insertAdjacentHTML('beforeend', template);
    
    // Output loading status
    console.log('Main component is loaded...')
  }
  
}

export { Main };