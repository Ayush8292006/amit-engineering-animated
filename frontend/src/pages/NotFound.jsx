import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/common';

const NotFound = () => {
  usePageMeta('Page Not Found');
  return (
    <section className="section">
      <div className="wrap text-center max-w-lg">
        <div className="enter font-heading font-bold text-7xl text-orange mb-4" style={{ '--d': '100ms' }}>404</div>
        <h1 className="enter text-2xl mb-3" style={{ '--d': '250ms' }}>This page could not be found</h1>
        <p className="enter text-muted mb-8" style={{ '--d': '400ms' }}>The link may be old or mistyped.</p>
        <Link to="/" className="enter btn btn-primary" style={{ '--d': '550ms' }}>Back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
