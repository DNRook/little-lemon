import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <nav className="App">
      <Nav/>
    </nav>
    <header>
      <Header/>
    </header>
    <main>
      <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
