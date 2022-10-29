import NavSingle from "./NavSingle";

function Navbar(props){
    return(
        <nav>
            <NavSingle URL="" Title="Home"/>
            <NavSingle URL="" Title="Contact"/>
            <NavSingle URL="" Title="About"/>
            <NavSingle URL="" Title="Login"/>
        </nav>
    );
}

export default Navbar;