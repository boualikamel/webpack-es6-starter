import { Profile } from "../../components/profile";
import template from "./header.html";
class Header {
  loadHeader() {
    // Output loading status
    console.log("HEADer component is loaded...");
    // set the html template
    document.body.insertAdjacentHTML("beforeend", template);
    // Create a new instance from profile component
    const profile = new Profile();
    // Invoke the profile
    profile.loadProfile();

  }
}

export { Header };
