import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";


const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;