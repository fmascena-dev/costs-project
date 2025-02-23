// import Input from "./components/form/input";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/NavBar';
import Container from './components/layout/Container';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router>
          <Navbar />
          <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
        </Container>
          <Footer />
        </Router>
      </Routes>
    </BrowserRouter>
  );
}
