import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PortalLayout from './layouts/PortalLayout';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          
          {/* todo: private routes */}
          <Route element={<PrivateRoutes />}>
            <Route element={<PortalLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
          
          {/* public routes */}
          <Route path="login" element={<LoginPage />} />

          {/* catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
