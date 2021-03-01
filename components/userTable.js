import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./modal";
import UpdateForm from "./updateForm";

const UserTable = (props) => {
  const [oneUser, setOneUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dateFormat = (datetime) => {
                          
    let date = new Date(Date.parse(datetime));
    console.log(date);
    let day = (date.getDay().toString().length == 1) ? `0${date.getDay()}` : date.getDay();
    let month = (date.getMonth().toString().length == 1) ? `0${date.getMonth()}`: date.getMonth();;
      console.log(day, month);
    return date.toDateString(); 
  }
  useEffect(() => {
    console.log(oneUser);
    console.log(showModal);
  }, [oneUser, showModal])

  const deleteUser = async (id) => {
    console.log(id);
    await axios.delete('/api/user', id).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-pink-400 text-center text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    Name
                </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    email
                </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    password
                </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider">
                    created
                </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg- divide-y divide-gray-200">
                {props.users?.map(user => {
                  return (
                    <tr className="bg-blue-200 hover:bg-white">
                      <td className="px-16 py-4 text-center whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={user.photo} alt=""></img>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" py-4 text-center whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-16 py-4 text-center whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.password}
                        </span>
                      </td>
                      <td className=" py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {dateFormat(user.created)}
                      </td>
                      <td className="pr-4 py-4 text-center whitespace-nowrap text-left text-sm font-medium">
                        <i className="fas fa-edit"></i>
                        <button onClick={() => {
                          setOneUser(user);
                          console.log(user);
                          setShowUpdateModal(true)
                        }} className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full" type="button"><img className="w-12 rounded-full" src="data:image/png;base64,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"></img></button>
                        <button className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full " type="button"
                          onClick={async () => {
                            await axios.post('/api/user-delete', { id: user.id }).then(data => {
                              console.log(data);
                              window.location.reload();
                            }).catch(err => {
                              console.log(err);
                            })
                          }} ><img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fvcEYsspnKiJbTYbMiXKHfgW94J2_gv4NQ&usqp=CAU"></img></button>
                        <button onClick={() => {
                          setOneUser(user);
                          setShowModal(true);
                        }} className="border-none mx-1 w-6 focus:outline-none fal fa-edit rounded-full " type="button" ><img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58doyRh34c2U2fhUT-oeTSq7Pf30VioAVow&usqp=CAU"></img></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={showModal} data={oneUser} onClick={() => {
        setShowModal(!showModal);
      }} />
      <UpdateForm data={oneUser}
        show={showUpdateModal}
        onClick={() => {
          setShowUpdateModal(!showUpdateModal);
        }} />
    </div>

  );
}

export default UserTable;