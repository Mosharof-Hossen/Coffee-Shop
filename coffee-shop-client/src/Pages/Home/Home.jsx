import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import CoffeeCard from "../Shared/CoffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {
    const [coffees, setCoffees] = useState(useLoaderData());
    const handleDeleteDisplay = id => {
        const filteredCoffees = coffees.filter(coffee => coffee._id != id)

        setCoffees(filteredCoffees);
    }
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} handleDeleteDisplay={handleDeleteDisplay} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;