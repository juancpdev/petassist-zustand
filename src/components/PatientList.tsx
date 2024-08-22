import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"


export default function PatientList() {
    // es lo mismo usar const patients = usePatientStore(state => state.patients)
    const { patients } = usePatientStore()
    
    return ( 
        <div className="md:w-1/2 lg:w-2/5 flex-1 ">
            {patients.length ? (
                <div>
                    <p className="text-lg mt-5 text-center mb-5 text-white">
                        Listado de {''}
                        <span className="text-yellow-300 font-bold">Pacientes</span>
                    </p>
                    {patients.map((patient) => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p className="text-lg mt-5 text-center mb-5 text-white">
                        No hay {''}
                        <span className="text-yellow-300 font-bold">Pacientes</span>
                    </p>
                </div>
            )}
        </div>
    )
}