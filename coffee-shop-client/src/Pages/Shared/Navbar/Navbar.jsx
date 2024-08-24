import logo from "../../../assets/more/logo1.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-cover bg-no-repeat h-28 py-2 bg-[url(https://i.ibb.co/SP5pCwW/15.jpg)]" >
            <div className="flex justify-center items-center gap-3 h-full">
                <img src={logo} alt="logo" className="h-full" />
                <Link to={"/"}><h2 className="text-white font-rancho-c text-5xl">Perk Up Café</h2> </Link>
            </div>
        </div>
    );
};

export default Navbar;