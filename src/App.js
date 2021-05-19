import logo from "./logo.svg";
import "./App.css";
import Contenedor from "./componentes/Contenedor-Menu";
import Mainmenu from "./componentes/Contenedor-Menu";
import { ContenedoriPhone } from "./componentes/ContenedoriPhone";
import { ContenedoriPad } from "./componentes/ContenedoriPad";
import { ContenedoriMac } from "./componentes/ContenedoriMac";
import { ContenedoriPhone12 } from "./componentes/ContenedoriPhone12";
import { ContenedorTag } from "./componentes/ContenedorTag";
import { ContenedorOne } from "./componentes/ContenedorOne";
import { Contenedorfooter } from "./componentes/Contenedorfooter";

function App() {
  return (
    <>
      <div className="App">
        <Mainmenu />
        <ContenedoriPhone />
        <ContenedoriPad />
        <ContenedoriMac />
        <ContenedoriPhone12 />
        <ContenedorTag />
        <ContenedorOne />
        <Contenedorfooter />
      </div>
    </>
  );
}

export default App;
