function Header(){
    return <div>
        <header>
            <h1>
                Blog Website
            </h1>
            <nav>
                <ul className="navbar">
                    <input type="text" name="search" id="searchbar" placeholder="Type to Search..." />
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </header>
    </div>
}
export default Header;