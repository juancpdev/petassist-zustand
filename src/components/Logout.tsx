// src/components/Logout.js

import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Swal from 'sweetalert2';

const Logout = () => {
  // juancruzpineda@gmail.com
  const handleLogout = async () => {

    Swal.fire({
      title: 'Cargando...',
      text: 'Cerrando sesión...',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    await signOut(auth);
    
  };

  return (
    <div className='flex mt-5'>
      <button className='mx-auto bg-red-600 p-2 rounded-md text-white hover:bg-red-500' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
};

export default Logout;
