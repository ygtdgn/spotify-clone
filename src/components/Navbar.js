import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {useMatch} from "react-router-dom";

function Navbar() {


	return (
		<nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
			<Navigation />



			{/*<Switch>*/}
			{/*	<Route exact path="/">*/}
			{/*		Home*/}
			{/*	</Route>*/}
			{/*	<Route path="/search">*/}
			{/*		Search*/}
			{/*	</Route>*/}
			{/*	<Route path="/collection">*/}
			{/*		Collection*/}
			{/*	</Route>*/}
			{/*</Switch>*/}
			<Auth />
		</nav>
	)
}

export default Navbar