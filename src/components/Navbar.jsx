const Navbar = () => {
    return(
        <>
            <header>
                <img className="logo" src='/logo.png' alt="logo" width={50}/>
                <nav className="nav-list">
                    <ul className="nav-links">
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;