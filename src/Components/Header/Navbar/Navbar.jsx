import { NavLink } from "react-router-dom";
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div>
            <nav className="flex py-6 px-5 justify-between items-center shadow-md">
                <Logo></Logo>
                <ul className="flex gap-5 text-lg font-bold">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Donation
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;