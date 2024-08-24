import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const { photo_url, coffeeName, supplier,chef,taste,details,price,quantity ,category } = useLoaderData();

    return (
        <div className="md:mx-20 mx-1 my-10 space-y-10">
            <Link to={"/"}><button className="flex items-center gap-1 font-raleway-c text-primary-t-c text-2xl" style={{ textShadow: "0px 0px 3px" }} type="button"><FaArrowLeft></FaArrowLeft> <span className="">Back To Home</span> </button></Link>
            <div className=" md:px-10 py-10 bg-[#F4F3F0] rounded flex flex-col md:flex-row justify-center items-center gap-16">
                <div className="">
                    <img src={photo_url} alt="" className="w-fit" />
                </div>
                <div className="space-y-5 ">
                    <h3 className="text-3xl font-rancho-c font-bold text-primary-c" style={{textShadow:"0px 0px 5px"}}>Niceties</h3>
                    <div className="font-raleway-c space-y-1">
                        <p className="text-xl "><span className="font-semibold ">Name: </span>{coffeeName}</p>
                        <p className="text-xl "><span className="font-semibold ">Chef: </span>{chef}</p>
                        <p className="text-xl "><span className="font-semibold ">Supplier: </span>{supplier}</p>
                        <p className="text-xl "><span className="font-semibold ">Taste: </span>{taste}</p>
                        <p className="text-xl "><span className="font-semibold ">Category: </span>{category}</p>
                        <p className="text-xl "><span className="font-semibold ">Details: </span>{details}</p>
                        <p className="text-xl "><span className="font-semibold ">Price: </span>{price} Taka</p>
                        <p className="text-xl "><span className="font-semibold ">Quantity: </span>{quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;