import test from "../../assets/test.png"
import hoppers from "../../assets/hoppers2.svg"
import { Button } from "react-bootstrap"
import colors from "../../colors.json"
import './nav.css'

const Nav = ({ setBookMode, setAuthorMode }) => {

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.darkGrey,
        color: colors["5beige"],
        width: 100 + "vw",
        maxWidth: 100 + "%",
        paddingTop: .4 + "rem",
        paddingBottom: .4 + "rem"
    }

    const buttonStyle = {
        backgroundColor: "Transparent",
        fontSize: 1.7 + "rem",
        border: "none",
    }

    const logoStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        width: 100 + "vw",
        maxWidth: 100 + "%",
        height: 25 + "px",
        fontSize: 1.2 + "rem",
        fontWeight: "bold",
        paddingTop: 17 + "px",
        paddingBottom: 17 + "px",
    }

    const logo = {
        width: 30 + "px",
    }

    return (
        <>
            <div style={logoStyle}>
                <p style={{ marginLeft: 5 + "px", marginBottom: 4 + "px", marginRight: 5 + "px", padding: 0 }}>TheBookHoppers</p>
                <img style={logo} src={hoppers} alt="hoppers icon"></img>
            </div>
            <div style={navStyle}>
                <Button className="nav-button" onClick={setBookMode} style={buttonStyle}>Books</Button>
                <Button className="nav-button" onClick={setAuthorMode} style={buttonStyle}>Authors</Button>
            </div>
        </>
    )
}


export default Nav;