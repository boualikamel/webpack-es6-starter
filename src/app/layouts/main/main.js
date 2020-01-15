import template from './main.html';
class Main {
  loadMain() {
    // Output loading status
    console.log('Main component is loaded...')
    // Set the HTML template
    document.body.insertAdjacentHTML('beforeend', template);
  }
  
}

export { Main };