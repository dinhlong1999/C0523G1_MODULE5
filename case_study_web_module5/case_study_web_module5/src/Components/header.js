import "./header.css"
function Header() {
    return(
    <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:"#EAD7BB",marginBottom:"15px"}}>
        <div className="container-fluid">
            <a className="navbar-brand" style={{color:"black"}} href="javascript:void(0)">FURAMA RESORT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={{color:"black"}} href="javascript:void(0)">Facility</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  style={{color:"black"}} href="javascript:void(0)">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color:"black"}} href="javascript:void(0)">Customer</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-light"  style={{color:"black"}} type="button">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )
}
export default Header;