import { NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/"
						className={({ isActive }) => {
							return isActive ? "active-link" : "";
						}}
					>
						Explore
					</NavLink>
				</li>

				<li>
					<NavLink to="/create"
					className={({ isActive }) => {
						return isActive ? "active-link" : "";
					}}
					>
						Create</NavLink>
				</li>

				<li>
					<NavLink to="/my-faves"
					className={({ isActive }) => {
						return isActive ? "active-link" : "";
					}}
					>
					My Faves</NavLink>
				</li>

			</ul>
		</nav>
	);
};
	