import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import "../css/estilo.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TioPatinhas from "../img/tiopatinhas.png"
import Cofre from "../img/cofre.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>DuckBank</h2>
            <div className="imagem-cofre">
                <img src={Cofre} />
            </div>
            <div className="nav-links">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                    <i className="bi bi-safe icon-navbar"></i> Visão Geral
                </NavLink>
                <NavLink to="/pix" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                    <i class="bi bi-arrow-left-right icon-navbar"></i> Área Pix
                </NavLink>
                <NavLink to="/caixa" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                    <i class="bi bi-currency-exchange icon-navbar"></i> Caixa-Forte
                </NavLink>
            </div>
            <div className="imagem-patinhas">
                <img src={TioPatinhas} />
            </div>
        </nav>
    )
}

export default Navbar