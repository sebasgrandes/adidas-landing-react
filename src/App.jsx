import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import PaginaProducto from "./pages/PaginaProducto";

// las rutas relativas (./) no son correctas en react router, debes usar siempre las absolutas y dejar que el basename maneje la raiz del subdirectorio
//
const App = () => (
    <Router basename="/proyectos/adidas-landing-react">
        <Nav />
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto" element={<PaginaProducto />} />
        </Routes>
    </Router>
);

export default App;
