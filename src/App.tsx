import './App.css'
import {Navbar} from "./component/Navbar/Navbar.tsx";
import {Footer} from "./component/Footer/Footer.tsx";
import Landing from "./component/Landing/Landing.tsx";
import {BrowserRouter} from "react-router-dom";
import WebSection from "./component/WebSection/WebSection.tsx";
import ConsultingSection from "./component/ConsultingSection/ConsultingSection.tsx";
import QuestionSection from "./component/QestionSection/QuestionSection.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Landing/>
          <WebSection/>
          <ConsultingSection/>
          <QuestionSection/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
