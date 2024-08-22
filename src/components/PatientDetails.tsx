import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

export type PatientDetailsProp = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProp)  {
  return (
    <div className=" sombras-md rounded-lg py-6 px-5 mb-10 text-white bg-cuadros space-y-2">
        <PatientDetailItem label ='ID' data = {patient.id} />
        <PatientDetailItem label ='Paciente' data = {patient.name} />
        <PatientDetailItem label ='Email' data = {patient.email} />
        <PatientDetailItem label ='Fecha Alta' data = {patient.date.toString()} />
        <PatientDetailItem label ='Síntomas' data = {patient.symptoms} />
    </div> 
  )
}
