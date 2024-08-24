import cup9 from "../../../assets/cups/Rectangle 9.png"
import cup10 from "../../../assets/cups/Rectangle 10.png"
import cup11 from "../../../assets/cups/Rectangle 11.png"
import cup12 from "../../../assets/cups/Rectangle 12.png"
import cup13 from "../../../assets/cups/Rectangle 13.png"
import cup14 from "../../../assets/cups/Rectangle 14.png"
import cup15 from "../../../assets/cups/Rectangle 15.png"
import cup16 from "../../../assets/cups/Rectangle 16.png"

const Gallery = () => {
    return (
        <div className="mt-16 max-w-6xl mx-auto">
            <div className="space-y-3 text-center mb-10 relative z-0">
                <p className="text-xl font-raleway-c">--- Follow Us Now ---</p>
                <h3 className="text-6xl text-primary-c font-rancho-c" style={{ textShadow: "0px 0px 5px" }} >Follow on Instagram</h3>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6 p-5">
                <img src={cup9} alt="" />
                <img src={cup10} alt="" />
                <img src={cup11} alt="" />
                <img src={cup12} alt="" />
                <img src={cup13} alt="" />
                <img src={cup14} alt="" />
                <img src={cup15} alt="" />
                <img src={cup16} alt="" />
            </div>
        </div>
    );
};

export default Gallery;