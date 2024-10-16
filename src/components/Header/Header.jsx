import "../Header/Header.scss"
import logo from "../../images/logo.png"


export function Header() {
    return (
        <>
            <header>
                    <img src={logo} alt="Logo La Pizza" />
            </header>
        </>
    )
}