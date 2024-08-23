import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import CoffeeCard from "../Shared/CoffeeCard/CoffeeCard";


const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;