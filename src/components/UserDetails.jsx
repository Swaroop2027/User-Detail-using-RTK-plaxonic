import React from "react";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    // console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="content">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center">List of user details</h1>
        <div className="my-4">
          <button
            className="bg-indigo-400 rounded-sm p-2 text-white"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add new user
          </button>
        </div>
      </div>
      <ul>
        <DisplayUsers />
      </ul>
      <hr />
    </div>
  );
};

export default UserDetails;
