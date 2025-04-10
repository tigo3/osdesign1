import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSite from './pages/MainSite'; // Import the main site component
import AdminDashboard from './features/admin/views/AdminDashboard'; // Import the admin dashboard component
import LoginPage from './features/admin/views/LoginPage'; // Import the login page component
import ProtectedRoute from './features/auth/components/ProtectedRoute'; // Import the protected route component
import { NotificationProvider } from './contexts/NotificationContext'; // Import NotificationProvider
import ToastNotification from './components/common/ToastNotification'; // Import ToastNotification

function App() {
  return (
    <NotificationProvider> {/* Wrap with NotificationProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin/*" // Use /* to allow nested routes within AdminDashboard if needed
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* Add other routes here if needed, e.g., a 404 page */}
        </Routes>
      </Router>
      {/* ToastNotification is rendered inside NotificationProvider */}
    </NotificationProvider>
  );
}

export default App;
