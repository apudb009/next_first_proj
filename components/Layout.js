import Nav from "./Nav";

export default ({ children }) =>{
    return (
        <div className="mainContainer">
            <Nav/>
            {children}
        </div>
    )
}