import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";

const ProfileContent = ({ active }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);


  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <>
        <div className="flex justify-center w-full">
          <div className="relative">
            <img
              src={`${user?.avatar?.url}`}
              className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132] "
              alt=""
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
              <AiOutlineCamera />
            </div>
          </div>
          
         
        </div>
        <br />
           <br />

<div className="w-full px-5">
<form aria-required={true}>
<div className="w-full 800px:flex block pb-3">
    
    <div className=" w-[100%] 800px:w-[50%]">
      <label className="block pb-2">Full Name</label>
      <input
        type="text"
        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    
    </div>

</form>
   

</div>
</>
      )}
    </div>
  );
};

export default ProfileContent;
