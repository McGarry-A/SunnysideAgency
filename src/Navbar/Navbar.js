import './Navbar.css'
const Navbar = () => {
    return (
        <header>
            <div className='nav-logo-div'>
                <h3 className='nav-logo'>sunnyside</h3>
            </div>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Services</li>
                    <li className='nav-list-item'>Projects</li>
                    <li className='nav-list-item'><button className='nav-list-button'>Contact</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar