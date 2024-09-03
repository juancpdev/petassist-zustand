// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Login from './components/Login';
import Logout from './components/Logout';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <Router>
      <div className="container mx-auto flex flex-col min-h-screen">
        <div className='flex-grow'>
          <img className="py-5 w-20 mx-auto" src="/DoctorAssist.svg" alt="Logo" />
          <h1 className="text-white text-center px-1 text-4xl font-bold md:w-2/3 md:mx-auto">
            Seguimientos de Pacientes {""}
            <span className="text-yellow-300">Veterinaria</span>
          </h1>

          <div >
            {user ? (
              <>
                <Logout />
                <div className="md:flex mt-5 gap-5 mx-5 md:gap-10 lg:mx-20 pb-10">
                  <PatientForm />
                  <PatientList />
                </div>
              </>
            ) : (
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
          </div>

          <ToastContainer />
        </div>
        <footer className="p-6 text-center border-t-2">
          <p className="text-sky-400">
            Created By <a className="font-bold" target="_blank" rel="noopener noreferrer" href="https://www.github.com/juancpdev">@jpdev</a>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
