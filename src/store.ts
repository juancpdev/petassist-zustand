import { create } from "zustand";
import { devtools,  persist } from "zustand/middleware";

import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

export type PatientState = { 
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientId: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient : DraftPatient) : Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({ 
        patients: [],
        activeId: '',

        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },

        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id),
                activeId: ''
            }))
        },

        getPatientId: (id) => {
            set(() => ({
                activeId: id
            }))
        },

        updatePatient: (data) => {
            
            set((state) => ({
                patients: state.patients.map(patient => 
                    patient.id === state.activeId 
                    ? {id: state.activeId, ...data} 
                    : patient),
                    activeId: ''
            }))
            
        },
    }), {
        name: 'patient-storage',
    })
))