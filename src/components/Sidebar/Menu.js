import { Icon } from 'Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav className="px-2">
			<ul className="flex flex-col">
				<li>
					<NavLink className={({ isActive }) => isActive ? 'h-10 px-4 bg-active text-white flex gap-x-4 items-center text-sm font-semibold rounded' : 'h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'} exact to={"/"}>
						<span>
							<Icon name="home" />
						</span>
						Ana sayfa
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'h-10 px-4 bg-active text-white flex gap-x-4 items-center text-sm font-semibold rounded' : 'h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'}  to={"/search"}>
						<span>
							<Icon name="search" />
						</span>
						Ara
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => isActive ? 'h-10 px-4 bg-active text-white flex gap-x-4 items-center text-sm font-semibold rounded' : 'h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'}  to={"/collection"} >
						<span>
							<Icon name="collection" />
						</span>
						Kitaplığın
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Menu