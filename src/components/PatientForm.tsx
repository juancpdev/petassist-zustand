import { useForm } from "react-hook-form"
import Errors from "./Errors";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function PatientForm() {

    const { addPatient, activeId, patients, updatePatient } = usePatientStore()
  
    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>()

    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('date', activePatient.date)
            setValue('email', activePatient.email)
            setValue('symptoms', activePatient.symptoms)
        }
    })

    const registerPatient = (data : DraftPatient) => {
        
        if(activeId) {
            updatePatient(data)
            toast.success('Paciente Actualizado')
        }
        else {
            addPatient(data)
            toast.success('Paciente Registrado')
        }
        
        reset()
    }

    return (
      <div className="md:w-1/2 ">

          <p className="text-lg mt-5 text-center mb-8 text-white ">
              Añade Pacientes y {''}
              <span className="text-yellow-300 font-bold">Administralos</span>
          </p>
  
          <form 
              className=" sombras-md rounded-lg pt-10 pb-5 px-5 mb-10 bg-cuadros m-3"
              noValidate
              onSubmit={handleSubmit(registerPatient)}
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-white text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-lg"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {...register(
                            "name", { 
                                required: 'El nombre del paciente es obligatorio', 
                                maxLength: {
                                    value: 25,
                                    message: 'El nombre del paciente no puede tener más de 25 caracteres'
                                }
                        })}
                    />
                    {errors.name && (
                        <Errors>
                            {errors.name?.message}
                        </Errors>
                    )}

                    {errors.maxLength && (
                        <Errors>
                            {errors.maxLength?.message}
                        </Errors>
                    )}
                    
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-white text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  bg-black text-white border border-gray-600 rounded-lg"  
                      type="text" 
                      placeholder="Nombre del Propietario" 
                      {...register(
                        "caretaker", { 
                            required: 'El nombre del propietario es obligatorio', 
                            maxLength: {
                                value: 25,
                                message: 'El nombre del propietario no puede tener más de 25 caracteres'
                            }
                        })}
                    />
                    {errors.caretaker && (
                        <Errors>
                            {errors.caretaker?.message}
                        </Errors>
                    )}

                    {errors.maxLength && (
                        <Errors>
                            {errors.maxLength?.message}
                        </Errors>
                    )}
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-white text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3 bg-black text-white border border-gray-600 rounded-lg"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {...register("email", {
                        required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                      })} 
                />
                {errors.email && (
                        <Errors>
                            {errors.email?.message}
                        </Errors>
                    )}
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-white text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3 bg-black text-white border border-gray-600 rounded-lg"  
                      type="date" 
                      {...register(
                        "date", { 
                            required: 'La fecha es obligatoria',                         
                        })}
                    />
                    {errors.date && (
                        <Errors>
                            {errors.date?.message}
                        </Errors>
                    )}
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-white text-sm uppercase font-bold">
                  Síntomas 
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3 bg-black text-white border border-gray-600 rounded-lg"  
                      placeholder="Síntomas del paciente" 
                      {...register(
                        "symptoms", { 
                            required: 'Añade los sintomas del paciente',                         
                        })}
                    />
                    
                    {errors.symptoms && (
                            <Errors>
                                {errors.symptoms?.message}
                            </Errors>
                    )}
              </div>
  
              <input
                  type="submit"
                  className="bg-yellow-300 w-full p-3 text-black uppercase font-bold hover:bg-yellow-400 cursor-pointer transition-colors rounded-md"
                  value='Guardar Paciente'            
              />
          </form> 
      </div>
    )
  }