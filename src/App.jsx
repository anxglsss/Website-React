import './App.css'
import { Bill } from './components/Bill'
import { Business } from './components/Business'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { People } from './components/People'
function App() {
	return (
		<div className='bg-primary overflow-x-hidden'>
			<Navbar />
			<Hero />
			<Business />
			<Bill />
			<Card />
			<People />
			<Footer />
		</div>
	)
}

export default App
