import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
