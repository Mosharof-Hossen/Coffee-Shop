import icon1 from "../../../assets/icons/1.png"
import icon2 from "../../../assets/icons/2.png"
import icon3 from "../../../assets/icons/3.png"
import icon4 from "../../../assets/icons/4.png"

const Features = () => {
    return (
        <div className=" flex md:justify-between justify-center md:px-24 px-5 p-6 flex-wrap bg-gray-200">
            <div className=" w-[190px] space-y-2 text-center p-2">
                <img src={icon1} alt="icon1" className="mx-auto"/>
                <h3 className="font-rancho-c text-3xl">Awesome Aroma</h3>
                <p className="font-raleway-c text-base">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className=" w-[190px] space-y-2 text-center p-2">
                <img src={icon2} alt="icon1" className="mx-auto"/>
                <h3 className="font-rancho-c text-3xl">High Quality</h3>
                <p className="font-raleway-c text-base">We served the coffee to you maintaining the best quality</p>
            </div>
            <div className=" w-[190px] space-y-2 text-center p-2">
                <img src={icon3} alt="icon1" className="mx-auto"/>
                <h3 className="font-rancho-c text-3xl">Pure Grades</h3>
                <p className="font-raleway-c text-base">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className=" w-[190px] space-y-2 text-center p-2">
                <img src={icon4} alt="icon1" className="mx-auto"/>
                <h3 className="font-rancho-c text-3xl">Proper Roasting</h3>
                <p className="font-raleway-c text-base">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            
            
            
        </div>
    );
};

export default Features;