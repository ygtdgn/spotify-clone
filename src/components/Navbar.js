import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {useMatch} from "react-router-dom";
import Search from "./Navbar/Search";
import Library from "./Navbar/Library";


function Navbar() {

	const searchRoute = useMatch('/search')
	const libRoute = useMatch('/collection')

	return (
		<nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
			<Navigation />


			{searchRoute && <Search />}
			{libRoute && <Library />}

			
			<Auth />
		</nav>
	)
}

export default Navbar