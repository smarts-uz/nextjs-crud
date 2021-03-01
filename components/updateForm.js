import { useEffect, useState } from "react";
import axios from "axios";
const updateForm = (props) => {
    console.log("data is this" , props.data);
    const [lastname, setLastname] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        
    }, [lastname, firstname, email, password, photo])


    const formSubmit = async (e) => {
        e.preventDefault();

        const form = {
            id: props.data.id,
            firstName: firstname ?? props.data?.firstName,
            lastName: lastname ?? props.data?.lastName,
            email: email ?? props.data?.email,
            password: password ?? props.data?.password,
            photo: photo ?? props.data?.photo
        }
        await axios.post('/api/user-update', form)
            .then(res => {
                window.location.reload();
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className={(props.show) ? 'fixed z-10 inset-0 overflow-y-auto' : 'fixed z-10 inset-0 hidden'}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="flex-shrink  bg-gray-800 w-full  align-middle text-white text-3xl">
            <div className="space-y-auto p-8 uppercase  font-extrabold">
                <h1 className="uppercase text-extrabold">please fill in</h1>
                <form onSubmit={formSubmit}>

                    <div className="w-full text-center text-black">
                        <img className="m-auto rounded-xl w-24 h-24 mt-12 mb-4"  src={photo ? photo : props.data?.photo}></img>
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname ? firstname : props.data?.firstName} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="First Name" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname ? lastname : props.data?.lastName} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Last Name" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email ? email : props.data?.email} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Email" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password ? password : props.data?.password} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Password" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setPhoto(e.target.value)} value={photo ? photo : props.data?.photo} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Enter Photo Link" />
                    </div>
                 
                    <div className="flex justify-around mb-4 ">
                    <button type="submit" className="text-2xl bg-white-900 focus:outline-none  border-2  border-green-400 rounded-full h-12 px-24 uppercase font-bold hover:bg-white hover:text-gray-700">submit</button>
                    <button  type="button" onClick={props.onClick} className=" border-4 bg-gray-900 text-white text-2xl hover:text-black border-blue-500 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                    </button>
                </div>
         
                </form>
            </div> 
        </div>
   
                </div>
        </div>
    </div>

    );
}

export default updateForm;