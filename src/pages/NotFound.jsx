import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <>
        <div className="container404">
            <img className="img404" src="/img/404.jpeg" alt="" />
            <p className="text404">La pagina che stai cercando non esiste</p>
            <NavLink className={"link404"} to="/">Torna alla Home</NavLink>
        </div>
        </>
    )
}