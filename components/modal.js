import { data } from 'autoprefixer';
import Image from 'next/image';

const Modal = (props) => {
    return (
        <div className={(props.show) ? 'fixed z-10 inset-0 overflow-y-auto' : 'fixed z-10 inset-0 hidden'}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex flex-col items-center">
                        <img className="w-40 h-40 rounded-full my-4"  src={props.data?.photo}/>
                        <div className="flex justify-between  space-x-20 items-center bg-blue-50 p-12 font-sans text-2xl">
                            <p>{props.data?.firstName}  {props.data?.lastName}</p>
                            <div className="flex flex-col">
                                <p className="border-b-4 border-blue-900 bg-pink-500 text-sm w-64 rounded-t-xl p-4">email: {props.data?.email}</p>
                                <p className="bg-green-300 rounded-b-xl p-2 text-sm py-4">password: {props.data?.password}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around mb-4 ">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Deactivate
                        </button>
                        <button  type="button" onClick={props.onClick} className=" border-4 border-blue-500 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Modal;