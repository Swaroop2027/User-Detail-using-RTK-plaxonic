import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  //   console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" w-[50%] text-center">
        {data.map((user, id) => {
          return (
            <div className="bg-slate-400 flex justify-between items-center my-3 rounded-sm">
              <li className="text-white inline my-3 ml-2" key={id}>
                {user}
              </li>

              <button
                className="bg-red-600 text-white rounded-md p-2 my-3 mr-2"
                onClick={() => deleteUser(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayUsers;
