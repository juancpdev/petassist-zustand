import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

export type PatientDetailsProp = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProp)  {

  const { deletePatient, getPatientId } = usePatientStore()

  return (
    <div className=" sombras-md rounded-lg py-6 px-5 mb-5 text-white bg-cuadros space-y-2">
        <PatientDetailItem label ='ID' data = {patient.id} />
        <PatientDetailItem label ='Paciente' data = {patient.name} />
        <PatientDetailItem label ='Email' data = {patient.email} />
        <PatientDetailItem label ='Fecha Alta' data = {patient.date.toString()} />
        <PatientDetailItem label ='Síntomas' data = {patient.symptoms} />

        <div className="flex justify-between pt-2">
          <button 
            className="bg-blue-600 rounded-md py-2 px-10 hover:bg-blue-500"
            onClick={() => getPatientId(patient.id)}
          >
            Editar
          </button>

          <button 
            className="bg-red-600 rounded-md py-2 px-10 hover:bg-red-500"
            onClick={() => deletePatient(patient.id)}
          >
            Eliminar
          </button>
        </div>
    </div> 
  )
}
