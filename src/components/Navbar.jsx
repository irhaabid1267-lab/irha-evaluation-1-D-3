
function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <span className="logo-icon">A</span>
                <div>
                    <h3>AegisCore</h3>
                    <small>Standards Engine</small>
                </div>
            </div>

            <div className="nav-links">
                <a href="#overview">Overview</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#matrix">Matrix</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <button className="nav-btn">
                Start Assessment →
            </button>

        </nav>
    );
}

export default Navbar;
