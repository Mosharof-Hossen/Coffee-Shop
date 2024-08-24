import { useLoaderData, useParams } from "react-router-dom";


const UpdateCoffee = () => {
    const id = useParams()
    const data = useLoaderData()
    console.log(id,data);
    return (
        <div>
            UpdateCoffee
        </div>
    );
};

export default UpdateCoffee;