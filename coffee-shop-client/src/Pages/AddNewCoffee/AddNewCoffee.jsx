import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddNewCoffee = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        fetch("http://localhost:3000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        title: 'New Coffee has been saved',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    reset()
                }
            })
    }

    return (
        <div className="md:mx-20 mx-1 my-10 space-y-10">
            <Link to={"/"}><button className="flex items-center gap-1 font-raleway-c text-primary-t-c text-2xl" style={{ textShadow: "0px 0px 3px" }} type="button"><FaArrowLeft></FaArrowLeft> <span className="">Back To Home</span> </button></Link>
            <div className=" md:px-10 py-10 bg-[#F4F3F0] rounded">
                <div className="text-center md:px-10 px-1 space-y-6">
                    <h2 className="font-rancho-c text-4xl" style={{ textShadow: "0px 0px 3px" }}>Add New Coffee</h2>
                    <p className=" text-gray-500 text-center font-raleway-c">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="px-5 md:px-0 font-raleway-c">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
                            <div className="flex-1">
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Name</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Name" {...register("coffeeName", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.coffeeName?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Coffee Name is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Supplier</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Supplier" {...register("supplier", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.supplier?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Supplier is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Category</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Category" {...register("category", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.category?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Coffee Category is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Quantity</p>
                                    <input className="px-2 py-2 w-full rounded" type="number" placeholder="Enter Coffee Quantity" {...register("quantity", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.quantity?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Coffee quantity is Required.</p>
                                        )
                                    }
                                </label>
                            </div>
                            <div className="flex-1">
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Chef</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Chef" {...register("chef", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.chef?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Chef Name is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Taste</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Taste" {...register("taste", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.taste?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Coffee taste is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Details</p>
                                    <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter Coffee Details" {...register("details", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.details?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Details is Required.</p>
                                        )
                                    }
                                </label>
                                <label className="">
                                    <p className="my-2 font-semibold text-xl">Price</p>
                                    <input className="px-2 py-2 w-full rounded" type="number" placeholder="Enter Coffee price" {...register("price", { required: true, maxLength: 80 })} />
                                    {
                                        errors?.price?.type === "required" && (
                                            <p className="text-sm mt-1 text-red-500 " role="alert">Price is Required.</p>
                                        )
                                    }
                                </label>
                            </div>
                        </div>
                        <label className="">
                            <p className="my-2 font-semibold text-xl">Photo Url</p>
                            <input className="px-2 py-2 w-full rounded" type="text" placeholder="Enter photo URL" {...register("photo_url", { required: true, maxLength: 80 })} />
                            {
                                errors?.photo_url?.type === "required" && (
                                    <p className="text-sm mt-1 text-red-500 " role="alert">Photo Url is Required.</p>
                                )
                            }
                        </label>
                        <input className="text-primary-c font-rancho-c border-2 cursor-pointer border-primary-c text-2xl bg-primary-b-c w-full p-2 mt-8 rounded" type="submit" value={"Add Coffee"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCoffee;