import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"
import { useState } from "react"



export default function PatientList() {
    // es lo mismo usar const patients = usePatientStore(state => state.patients)
    const { patients } = usePatientStore()
    const [filter, setFilter] = useState('')
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    // Función para eliminar los acentos de un string
    const removeAccents = (str : string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const patientFiltered = patients.filter(patient =>
        removeAccents(patient.caretaker.toLowerCase()).startsWith(removeAccents(filter.toLowerCase()))
    );

    const emptyInput = () => {
        setFilter('')
    }


    return ( 
        <div className="md:w-1/2 ">
            {patients.length ? (
                <div>
                    <p className="text-lg mt-5 text-center mb-8 text-white">
                        Listado de {''}
                        <span className="text-yellow-300 font-bold">Pacientes</span>
                    </p>
                    <div className="mx-3 relative rounded md:mr-7 ">
                        <MagnifyingGlassIcon className="text-white w-6 absolute h-full ml-2"/>
                        {filter && <XMarkIcon className="text-white w-6 absolute h-full right-0 mr-2 cursor-pointer" onClick={emptyInput}/>}
                        <input 
                            type="text" 
                            placeholder="Buscar por Propietario..." 
                            className="p-1 bg-black text-white pl-9 pr-9 w-full rounded-md border py-2"
                            value={filter}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className="overflow-y-scroll altura-list p-3 scroll-edit">
                        {filter === '' ? (
                            patients.map((patient) => (
                                <PatientDetails
                                    key={patient.id}
                                    patient={patient}
                                />
                            ))
                        ) : (
                            patientFiltered.length > 0 ? (
                                patientFiltered.map((patient) => (
                                    <PatientDetails
                                        key={patient.id}
                                        patient={patient}
                                    />
                                ))
                            ) : (
                                <div className=" flex flex-col items-center my-10 ">
                                    
                                    <p className="text-lg text-center mb-5 text-white">
                                        No existe el propietario {''}
                                        <span className="text-yellow-300 font-bold">"{filter}"</span>
                                    </p>
                            </div>
                            )
                        )}
                    </div>
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