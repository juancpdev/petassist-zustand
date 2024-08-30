import { useState, useRef, useEffect } from 'react';
import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { PencilSquareIcon, TrashIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert';
export type PatientDetailsProp = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProp)  {

  const { deletePatient, getPatientId } = usePatientStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const  handleDelete = () => { 
    swal({
      title: "¿Deseas eliminar el paciente?",
      text: "Esta acción no se puede revertir, y se eliminará de tu listado",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado');
      }
    });
  }

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    getPatientId(patient.id)

    window.scrollTo({
      top: 200,
      behavior: 'smooth' // Para un desplazamiento suave
    });
  }

  return (
    <div className="relative sombras-md rounded-lg py-6 px-5 mb-5 text-white bg-cuadros space-y-3 overflow-x-hidden break-words">
        <EllipsisHorizontalIcon 
          className="absolute w-10 p-1 right-3 top-3 cursor-pointer bg-gris  rounded-full"
          onClick={() => handleMenu()}
        />

        {menuOpen && (
          <div ref={menuRef} className="bg-black sombras-menu absolute right-6 top-7 rounded-md">
            <button 
              className="w-full rounded-xl py-2 px-5 font-bold bg-gris flex items-center gap-3 "
              onClick={handleClick}
            >
              <PencilSquareIcon className="w-5 "/>
              Editar
            </button>

            <button 
              className="w-full rounded-xl py-2 px-5 text-red-600 font-bold bg-gris flex items-center gap-3"
              onClick={() => handleDelete()}
            >
              <TrashIcon className="w-5"/>
              Eliminar
            </button>
        
          </div>
        )}
        
        <PatientDetailItem label ='Paciente' data = {patient.name} />
        <PatientDetailItem label ='Propietario' data = {patient.caretaker} />
        <PatientDetailItem label ='Email' data = {patient.email} />
        <PatientDetailItem label ='Fecha Alta' data = {patient.date.toString()} />
        <PatientDetailItem label ='Síntomas' data = {patient.symptoms} />

        
    </div> 
  )
}
