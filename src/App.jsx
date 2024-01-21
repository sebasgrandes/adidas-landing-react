import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import PaginaProducto from "./pages/PaginaProducto";

const App = () => (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto" element={<PaginaProducto />} />
        </Routes>
    </Router>
);

export default App;
