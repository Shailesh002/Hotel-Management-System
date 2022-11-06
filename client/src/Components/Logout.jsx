function Logout(props){

    function handleLogout(event) {
        // event.preventDefault();
        // alert("\nCALLLLLLLLEDDDDDDD !");
        localStorage.removeItem('TOKEN',);
        // redirect('/');
    }

    return(
        <div 
            onClick={handleLogout}
            className="SingleNav" 
        >
            <a href={props.SRC} className="FontCursive">Logout</a>
        </div>
    );
}

export default Logout;