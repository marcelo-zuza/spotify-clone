import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


import './App.css'

function App() {

  return (
    <div>
      <Navbar />    
      <Hero />
      <h1 className="bg-red-600 text-white text-3xl p-8 text-center">WARNING - This is not an official page, just a praticing exercise</h1>
      <Footer />

     
      <h2 className="bg-black text-white text-center text-2xl border-r border-black pb-14">Developed by <span className="font-bold">MARCELO ZUZA</span> | <a href="https://www.linkedin.com/in/marcelo-zuza/" className="hover:text-blue-700">Linkedin</a> | <a href="" className="hover:text-blue-700">GitHub</a></h2>
    </div>
  )
}

export default App
