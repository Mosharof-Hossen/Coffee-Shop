import { Link } from "react-router-dom";
import errorImage from "../../../assets/404/404.gif"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ShortFooter from "../ShortFooter/ShortFooter";
import { FaArrowCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <Navbar></Navbar>
                <div className="mt-10">
                    <Link><button className="flex items-center gap-2 mx-auto text-xl font-rancho-c"><FaArrowCircleLeft></FaArrowCircleLeft><span>Back to Home</span></button></Link>
                    <img className="w-1/2 mx-auto" src={errorImage} alt="errorImage" />
                </div>
            </div>
            <div>
                <Footer></Footer>
                <ShortFooter></ShortFooter>
            </div>
        </div>
    );
};

export default ErrorPage;