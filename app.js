import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogsList from './components/BlogsList';
import EditBlog from './components/EditBlog';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BlogsList} />
        <Route path="/edit/:id" component={EditBlog} />
        <Route path="/create" component={CreateBlog} />
      </div>
    </Router>
  );
}

export default App;