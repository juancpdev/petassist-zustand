// src/components/Login.jsx

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: 'Cargando...',
        text: 'Iniciando sesión...',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Esperar 1.8 segundos antes de intentar iniciar sesión
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));

      // Intentar iniciar sesión
      await signInWithEmailAndPassword(auth, email, password);
      
      // Redirigir después de la autenticación
      navigate('/');

    } catch (err) {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className="flex justify-center items-center my-36">
      <form onSubmit={handleLogin} className="border text-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded bg-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded bg-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-black font-bold p-2 rounded hover:bg-yellow-400 transition-all"
        >
          Ingresar
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
