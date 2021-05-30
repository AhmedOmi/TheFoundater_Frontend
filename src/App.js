import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/Contact';
import Stories from './pages/Stories';
import ArticleDetails from './pages/articles';

function App() {
  return (
    <div className="App">
      <div className="content">
        <header><Header /></header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/stories">
                <Stories />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/article/:id" >
                <ArticleDetails />
              </Route>
            </Switch>
          </Router>
        </main>
        <footer><Footer/></footer>
      </div>
    </div>
  );
}

export default App;
