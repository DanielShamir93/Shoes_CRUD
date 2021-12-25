import './styles/App.css';
import Shoes from './pages/components/shoes/shoes.component';
import EditShoe from './pages/components/editShoe/editShoe.component';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Shoes} />
        <Route path="/edit/:id" exact component={EditShoe} />

      </BrowserRouter>
    </div>
  );
}

export default App;
