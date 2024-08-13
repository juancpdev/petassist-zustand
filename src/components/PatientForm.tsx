import { useForm } from "react-hook-form"
import Errors from "./Errors";

export default function PatientForm() {
  
    const { register, handleSubmit, formState: {errors} } = useForm()

    const registerPatient = () => {
        console.log("Paciente registrado");
        
    }

    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">

          <p className="text-lg mt-5 text-center mb-5 text-white">
              Añade Pacientes y {''}
              <span className="text-yellow-300 font-bold">Administralos</span>
          </p>
  
          <form 
              className=" sombras-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(registerPatient)}
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-white text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100 rounded-lg"  
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
                            {errors.name?.message?.toString()}
                        </Errors>
                    )}

                    {errors.maxLength && (
                        <Errors>
                            {errors.maxLength?.message?.toString()}
                        </Errors>
                    )}
                    
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-white text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  border border-gray-100 rounded-lg"  
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
                            {errors.caretaker?.message?.toString()}
                        </Errors>
                    )}

                    {errors.maxLength && (
                        <Errors>
                            {errors.maxLength?.message?.toString()}
                        </Errors>
                    )}
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-white text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100 rounded-lg"  
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
                            {errors.email?.message?.toString()}
                        </Errors>
                    )}
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-white text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100 rounded-lg"  
                      type="date" 
                      {...register(
                        "date", { 
                            required: 'La fecha es obligatoria',                         
                        })}
                    />
                    {errors.date && (
                        <Errors>
                            {errors.date?.message?.toString()}
                        </Errors>
                    )}
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-white text-sm uppercase font-bold">
                  Síntomas 
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3  border border-gray-100 rounded-lg"  
                      placeholder="Síntomas del paciente" 
                      {...register(
                        "symptoms", { 
                            required: 'Añade los sintomas del paciente',                         
                        })}
                    />
                    
                    {errors.symptoms && (
                            <Errors>
                                {errors.symptoms?.message?.toString()}
                            </Errors>
                    )}
              </div>
  
              <input
                  type="submit"
                  className="bg-yellow-300 w-full p-3 text-black uppercase font-bold hover:bg-yellow-400 cursor-pointer transition-colors"
                  value='Guardar Paciente'
                  
              />
          </form> 
      </div>
    )
  }