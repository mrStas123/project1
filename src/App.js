import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Home from './components/pages/Home/Home'

const App = () =>
(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
    </Switch>
    <Footer />
  </Router>
)

export default App
