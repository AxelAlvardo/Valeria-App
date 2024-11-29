import { useMqtt } from "../hooks/UseMqtt";
import DashboardElement from "../components/DashboardElement";
import '../styles/Alert.css'
import { useState } from "react";

function Dashboard() {
  const { messages } = useMqtt();
  const [alert, setAlert] = useState('secayo')

  return (
    <main className="min-h-[100dvh] h-full bg-gray-950 text-slate-100 flex flex-col justify-center items-center gap-6 p-4 main-content">
      <div className="w-full max-w-2xl flex flex-col gap-10 justify-center items-center">
        {/* Elementos para mostrar los mensajes de los topics suscritos */}
        <div className="flex flex-wrap gap-6 w-full justify-center items-center">

          <div className="div-alert">
            <DashboardElement setAlert={setAlert} value={messages["/test/comment"]} />
            <div className={`circle ${alert === 'secayo' ? 'circle-red' : 'circle-green'}`}></div>
            <img src="./images/esconder.png" alt="eye" className="eye-img" />
          </div>


        </div>
      </div>
    </main>
  );
}

export default Dashboard;
