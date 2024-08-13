import { Link, BrowserRouter, useRoutes } from 'react-router-dom';
import { AppRoutes } from '@/constants';
import routes from '@/routes';
import './App.css';

function Routing() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="header-nav">
            <Link to={AppRoutes.Home}>Home</Link>
            <Link to={AppRoutes.History}>History</Link>
          </nav>
        </header>

        <main className="App-body">
          <Routing />
        </main>

        <footer className="App-footer">&copy; YouTube mini app</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
