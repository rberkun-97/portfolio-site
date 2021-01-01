import './App.css';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Header />
        <h1>My Portfolio!!</h1>
        <h2>Rachel Berkun</h2>
        <About />
        <Contact />
    </div>
  );
}

export default App;
