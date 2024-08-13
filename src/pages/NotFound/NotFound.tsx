import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <div className="not-found__text">
        Page not found. <Link to="/">Go to the home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
