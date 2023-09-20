import "../src/navbar.css";

function Navbar() {
    return (
        <div className="containerNav">
            <div className="logo">
                <img src="../images/Vector-g.svg" alt="" />
                <img src="../images/Vector-m.svg" alt="" />
                <img src="../images/Vector-2.svg" alt="" />
            </div>
            <div className="changeMode">
                <button className="change">Change Mode</button>
            </div>
        </div>
    );
}
export { Navbar };
