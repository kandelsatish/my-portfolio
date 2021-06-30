import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import SinglePost from './components/SinglePost'
import Posts from './components/Posts'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about"  />
        <Route component={Projects} path="/projects" />
        <Route component={Posts} path="/posts"  />
        <Route component={SinglePost} path="/posts/:id"  />
      </Switch>
    </Router>
  );
}

export default App;
