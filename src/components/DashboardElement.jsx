
function DashboardElement({ value, setAlert }) {
  //value: Valor del elemento

  //GUARDANDO ESTADO DEL CIEGO
  document.addEventListener('DOMContentLoaded', ()=> {
    setAlert(value)
  })

  return (
    <div className="p-4 rounded-md bg-slate-50 text-neutral-800 flex flex-col gap-4justify-center items-center">
      <p className="text-2xl">{value}</p>
    </div>
  );
}

export default DashboardElement;
