import {About, Footer, Header, Skills, Work} from "./containers"
import {Navbar} from "./components"
import "./App.scss"
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />

    </div>
  );
}

export default App;

