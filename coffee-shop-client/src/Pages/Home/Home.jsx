import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import CoffeeCard from "../Shared/CoffeeCard/CoffeeCard";
import { useState } from "react";
import Features from "../Shared/Features/Features";
import { FaMugHot } from "react-icons/fa6";
import Gallery from "../Shared/Gallery/Gallery";


const Home = () => {
    const [coffees, setCoffees] = useState(useLoaderData());
    const handleDeleteDisplay = id => {
        const filteredCoffees = coffees.filter(coffee => coffee._id != id)

        setCoffees(filteredCoffees);
    }
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <div className=" mt-16 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('https://i.ibb.co/wzJkXDH/1.png')",

                }}
            >
                <div className="space-y-3 text-center mb-10  ">
                    <p className="text-xl font-raleway-c">--- Sip & Savor ---</p>
                    <h3 className="text-6xl text-primary-c font-rancho-c" style={{ textShadow: "0px 0px 5px" }} >Our Popular Products</h3>
                    <Link to={"/add-new-coffee"}><button style={{ textShadow: "0px 0px 5px" }} className="mx-auto px-3 mt-6 rounded font-rancho-c text-2xl py-1 flex items-center gap-2 border-2 border-primary-c bg-primary-b-c text-white cursor-pointer"><span>Add Coffee</span><FaMugHot className="text-primary-c"></FaMugHot></button></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5  max-w-6xl mx-auto">

                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} handleDeleteDisplay={handleDeleteDisplay} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;