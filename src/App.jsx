import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import DashboardPage from './pages/Dashboard';

// Simple router for demo purposes since we aren't using react-router-dom heavily 
// or to keep it simple for a single page feel if needed. 
// But a hackathon project usually benefits from simple conditional rendering or just a long page.
// Let's use simple conditional rendering based on hash for simplicity in a "zip" submit 
// without needing complex router setup if not strictly necessary, 
// BUT standard react-router-dom is better. I didn't install it yet.
// I will just render Home for now and maybe add sections.
// Wait, I should probably install react-router-dom for a real "app" feel.
// Or I can just make it a single page landing with sections.
// "Event Discovery" implies a page.
// Let's implement a simple state-based router for simplicity in this artifact.

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'events': return <EventsPage />;
      case 'dashboard': return <DashboardPage />;
      default: return <HomePage />;
    }
  };

  return (
    <Layout>
      {/* A simple hacky nav override for functionality if I don't put it in context */}
      {/* For a clean code, I'd use Context or Router. Let's stick to modifying Layout to accept props or just window.location hash routing if I want to be lazy, but let's do it rightish. */}
      {/* Actually, I'll just put the router logic here and maybe expose a way to change it, 
          but for now let's just render Home. 
          To make it navigable, I need to pass the navigation function or use a Router.
          I will install react-router-dom quickly? No, latency.
          I'll use window.location.hash based routing. simple and works for static deployment.
      */}
      <Router />
    </Layout>
  );
}

// Simple Hash Router Implementation
const Router = () => {
  const [route, setRoute] = React.useState(window.location.hash || '#home');

  React.useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#events') return <EventsPage />;
  if (route === '#dashboard') return <DashboardPage />;
  return <HomePage />;
};

export default App;
