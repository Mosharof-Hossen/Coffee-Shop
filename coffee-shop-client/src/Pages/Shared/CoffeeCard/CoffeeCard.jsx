
import PropTypes from 'prop-types';
import { FaPen, FaRegEye, FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,handleDeleteDisplay }) => {
    const { coffeeName, chef, price, photo_url, _id } = coffee
   

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            handleDeleteDisplay(id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="card lg:card-side bg-slate-100 rounded font-raleway-c">
            <figure>
                <img
                    src={photo_url}
                    alt="coffeeImage" />
            </figure>
            <div className=" p-8 flex md:flex-row flex-col justify-between gap-2 items-center">
                <div className='space-y-2'>
                    <p className="text-xl text-gray-500"><span className='font-semibold text-black'>Name: </span>{coffeeName}</p>
                    <p className="text-xl text-gray-500"><span className='font-semibold text-black'>Chef: </span>{chef}</p>
                    <p className="text-xl text-gray-500"><span className='font-semibold text-black'>Price: </span>{price} Taka</p>

                </div>
                <div className="flex md:flex-col flex-row gap-3 mt-5 md:mt-0">
                    <button className=" p-2 rounded bg-primary-b-c"><FaRegEye className='text-white'></FaRegEye></button>
                    <Link to={`/update-coffee/${_id}`}><button className=" p-2 rounded bg-black"><FaPen className='text-white'></FaPen></button></Link>
                    <button onClick={() => handleDelete(_id)} className=" p-2 rounded bg-red-500"><FaRegTrashCan className='text-white'></FaRegTrashCan></button>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleDeleteDisplay:PropTypes.func.isRequired
};

export default CoffeeCard;