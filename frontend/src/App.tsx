import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Loading from './components/Loading';
import Login from './components/Login';

// Code Splitting for Performance Optimization
const Hero = lazy(() => import('./components/Hero'));
const Qualities = lazy(() => import('./components/Qualities'));
const ProsAndCons = lazy(() => import('./components/ProsAndCons'));

const Timeline = lazy(() => import('./components/Timeline'));
const BucketList = lazy(() => import('./components/BucketList'));
const Birthday = lazy(() => import('./components/Birthday'));

// Fallback static data
import { heroContent, qualitiesContent, prosAndConsContent, galleryImages, birthdayContent, timelineContent, bucketListContent } from './data/content';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('auth') === 'true');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    sessionStorage.setItem('auth', 'true');
    setLoggedIn(true);
    window.history.pushState(null, '', window.location.href);
  };

  // IMPORTANT: useEffect must be before any conditional returns (Rules of Hooks)
  // The loggedIn dependency ensures it re-runs when the user logs in
  useEffect(() => {
    if (!loggedIn) return;
    fetch(import.meta.env.PROD ? '/api/content' : 'http://localhost:3000/api/content')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(fetchedData => {
        setData(fetchedData);
        setTimeout(() => setLoading(false), 800);
      })
      .catch(err => {
        console.warn("[App] Backend not running, falling back to local static data", err);
        setData({
          hero: heroContent,
          qualities: qualitiesContent,
          prosAndCons: prosAndConsContent,
          gallery: galleryImages,
          timeline: timelineContent,
          bucketList: bucketListContent,
          birthday: birthdayContent
        });
        setTimeout(() => setLoading(false), 800);
      });
  }, [loggedIn]);

  if (!loggedIn) return <Login onLogin={handleLogin} />;
  if (loading) return <Loading isVisible={true} />;
  if (!data) return null;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading isVisible={true} />}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Hero content={data.hero} />} />
            <Route path="qualities" element={<Qualities content={data.qualities} />} />
            <Route path="review" element={<ProsAndCons content={data.prosAndCons} />} />
            <Route path="journey" element={<Timeline content={data.timeline} />} />
            <Route path="future" element={<BucketList content={data.bucketList} />} />
            <Route path="surprise" element={<Birthday content={data.birthday} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
