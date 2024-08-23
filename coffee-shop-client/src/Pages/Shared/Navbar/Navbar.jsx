import logo from "../../../assets/more/logo1.png"

const Navbar = () => {
    return (
        <div className="bg-nav-c bg-cover bg-no-repeat h-28 py-2" >
            <div className="flex justify-center items-center gap-3 h-full">
                <img src={logo} alt="logo" className="h-full" />
                <h2 className="text-white font-rancho-c text-5xl">Perk Up Café</h2>
            </div>
        </div>
    );
};

export default Navbar;