import NavSingle from "./NavSingle";

function Navbar(props){
    return(
        <div className="">
            <nav>
                <NavSingle URL="/" Title="Home"/>
                <NavSingle URL="/contact" Title="Contact"/>
                <NavSingle URL="/about" Title="About"/>
                <NavSingle URL="/login" Title="Login"/>
            </nav>
        </div>
    );
}

export default Navbar;