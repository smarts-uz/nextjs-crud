import { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    useEffect(() => {

    }, [lastname, firstname, email, password])


    const formSubmit = async (e) => {
        e.preventDefault();

        const form = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            photo: photo
        }
        await axios.post('/api/user', form)
        .then(res=>{
            window.location.reload();
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

        window.location.reload();
        
        setPhoto('');
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');

    }

    return (
        <div className="flex-shrink  bg-gray-800 w-96  align-middle text-white text-3xl">
            <div className="space-y-auto p-8 uppercase  font-extrabold">
                <h1 className="uppercase text-extrabold">please fill in</h1>
                <form onSubmit={formSubmit}>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="First Name" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Last Name" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Email" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Password" />
                    </div>
                    <div className="w-full text-black">
                        <input type="text" onChange={(e) => setPhoto(e.target.value)} value={photo} className="w-full text-black my-4 rounded-full focus:outline-none px-4 text-2xl py-2 border-green-900 border-4 " placeholder="Enter Photo Link" />
                    </div>
                 
                    <button type="submit" className="text-2xl bg-white-900 focus:outline-none  border-2  border-green-400 rounded-full h-12 px-24 uppercase font-bold hover:bg-white hover:text-gray-700">submit</button>
                </form>
            </div> 
        </div>
   
    );
}

export default Form;