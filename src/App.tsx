import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
      <div className="container mx-auto mt-5">
        <img className=" mb-3 w-20 mx-auto" src="/DoctorAssist.svg" alt="Logo" />
        <h1 className=" text-white text-center text-4xl font-bold md:w-2/3 md:mx-auto">
          Seguimientos de Pacientes {""}
          <span className=" text-yellow-300">Veterinaria</span>
        </h1>

        <div className="md:flex mt-9 gap-5 mx-5 md:gap-10 lg:mx-20">
          <PatientForm/>
          <PatientList/>
        </div>
      </div>
    </>
  )
}

export default App
