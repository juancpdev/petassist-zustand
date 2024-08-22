export type PatientDetailItemProp = {
    label: string,
    data: string
}

export default function PatientDetailItem({label, data}: PatientDetailItemProp) {
  return (
    <div >
        <p className="font-bold uppercase text-yellow-200">
          {label}: {''}
          <span className="font-normal normal-case text-white">{data}</span>
        </p>
    </div>
  )
}
