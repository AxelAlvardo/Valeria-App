import { MqttProvider } from "./context/MqttContext";
import Dashboard from "./pages/Dashboard";

function App() {
  const brokerUrl = "ws://127.0.0.1:9001"; // URL de tu broker MQTT -> ws://<IP>:<Puerto>
  const options = {
    username: "whitecane", // Usuario MQTT
    password: "artefactos", // Contraseña MQTT
  };

  const topics = ["/test/alert"]; // Lista de topics a los que se suscribirá

  return (
    <MqttProvider brokerUrl={brokerUrl} options={options} topics={topics}>
      <Dashboard />
    </MqttProvider>
  );
}

export default App;