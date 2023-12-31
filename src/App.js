import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Profile = lazy(() => import('./profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        
      </Routes>
    </Suspense>
    </Router>
  );
}

export default App;