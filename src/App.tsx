import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <div className="container mx-auto">
        <img className=" py-5 w-20 mx-auto" src="/DoctorAssist.svg" alt="Logo" />
        <h1 className=" text-white text-center px-1 text-4xl font-bold md:w-2/3 md:mx-auto">
          Seguimientos de Pacientes {""}
          <span className=" text-yellow-300">Veterinaria</span>
        </h1>

        <div className="md:flex mt-5 gap-5 mx-5 md:gap-10 lg:mx-20">
          <PatientForm/>
          <PatientList/>
        </div>
      </div>

      <ToastContainer/>
    </>
  )
}

export default App
