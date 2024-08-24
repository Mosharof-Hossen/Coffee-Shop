import logo from "../../../assets/more/logo1.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-12 bg-cover"
        style={{backgroundImage:"url('https://i.ibb.co/bRjPgm4/13.jpg')"}}
        >
            <div className="flex items-center md:flex-row flex-col max-w-6xl mx-auto py-6">
                <div className="text-primary-c p-5 space-y-5 flex-1">
                    <img src={logo} className="w-20" alt="" />
                    <h2 className="text-5xl font-rancho-c" style={{ textShadow: "0px 0px 4px" }}>Perk Up Café</h2>
                    <p className="text-xl">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-3">
                        <FaFacebook className="text-4xl text-primary-c"></FaFacebook>
                        <FaTwitter className="text-4xl text-primary-c"></FaTwitter>
                        <FaInstagram className="text-4xl text-primary-c"></FaInstagram>
                        <FaLinkedin className="text-4xl text-primary-c"></FaLinkedin>
                    </div>

                    <div className="text-xl space-y-2">
                        <h2 className="text-5xl font-rancho-c mt-8 mb-4" style={{ textShadow: "0px 0px 4px" }}>Get in Touch</h2>

                        <p className="flex items-center gap-2"><FaPhone></FaPhone> <span>+88 01533 333 333</span></p>
                        <p className="flex items-center gap-2"><FaMailBulk /> <span>info@gmail.com</span></p>
                        <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot> <span>72, Wall street, King Road, Dhaka</span></p>
                    </div>
                </div>
                <div className="p-5 flex-1 space-y-6 w-full">
                    <h2 className="text-5xl font-rancho-c" style={{ textShadow: "0px 0px 4px" }}>Connect with Us</h2>
                    <form action="">
                        <input type="text" className="bg-white w-full px-2 py-2 mb-2 rounded" placeholder="Name" /> <br />
                        <input type="email" className="bg-white w-full px-2 py-2 mb-2 rounded" placeholder="Email" /><br />
                        <textarea type="textarea" rows={3} className="bg-white w-full px-2 py-2 mb-2 rounded" placeholder="Message" /> <br />
                        <button className="text-xl border-2 border-primary-c text-primary-c px-3 py-1 rounded-3xl font-rancho-c">Send Message</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;