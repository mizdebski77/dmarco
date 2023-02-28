import { Contact } from "./Contact/contact";
import { Footer } from "./Footer/footer";
import { Home } from "./Home/home";
import { Music } from "./Music/music";
import { Navigation } from "./Navigation/navigation";
import { Videos } from "./Videos/videos";
function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Music />
      <Videos />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
