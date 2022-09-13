//importing containers & navbar
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./containers";

import { Navbar, SocialIcons } from "./components";

//importing global styles
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      <SocialIcons />
    </div>
  );
}

export default App;
