import "./App.css"
import { CalendlyEmbed } from "./sections/CalendlyEmbed"
import { Cards } from "./sections/Cards"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"

function App() {
  return (
    <main>
      <Header />
      <Cards />
      <CalendlyEmbed />
      <Footer />
    </main>
  )
}

export default App
