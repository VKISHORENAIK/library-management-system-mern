import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './UpdateUserForm.css';
import { AppDispatch,RootState } from "../../../../redux/ReduxStore";
import { User } from "../../../../models/User";
import { Create } from "@mui/icons-material";
import { resetUser, UpdateUser } from "../../../../redux/slices/AuthenticationSlice";
import e from "cors";

export const UpdateUserForm:React.FC=() => {
    const userState= useSelector((state:RootState)=>state.authentication);
    const dispatch:AppDispatch=useDispatch();
    const [displayUpdate,setDisplayUpdate]=useState<boolean>(false);
    const [user,setUser]=useState<User | undefined>(userState.profileUser);
    const navigate=useNavigate();

    const UpdateUserState = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDisplayUpdate(true);
        if(e.target.value && e.target.name && user ){
            setUser({
                ...user,
                [e.target.name]:e.target.value
            });
        }
    }

    const submitUpdatedUser = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(user) dispatch(UpdateUser(user));
        setDisplayUpdate(false);
    }

    const logout = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        localStorage.removeItem("userId");
        dispatch(resetUser("loggedInUser"));
        dispatch(resetUser("profileUser"));
        navigate("/"); 
    }

    useEffect(()=>{
        if(!user){
            setUser(userState.profileUser);
        }
    }, [userState.profileUser,user])

    return(
        <form className="update-user-form">
            <div className="update-user-input-group">
                <h4>First Name:</h4>
                <input className="update-user-input" name="firstname" value={user?.firstName} onChange={UpdateUserState} disabled={userState.loggedInUser?._id !==userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position:'absolute',
                    top:'65%',
                    right: '0'
                }}/>}
            </div>
            <div className="update-user-input-group">
                <h4>Last Name:</h4>
                <input className="update-user-input" name="lastname" value={user?.lastName} onChange={UpdateUserState} disabled={userState.loggedInUser?._id !==userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position:'absolute',
                    top:'65%',
                    right: '0'
                }}/>}
            </div>
            <div className="update-user-input-group">
                <h4>Email</h4>
                <input className="update-user-input" name="email" value={user?.email} onChange={UpdateUserState} disabled={userState.loggedInUser?._id !==userState.profileUser?._id}/>
                {userState.loggedInUser?._id === userState.profileUser?._id && <Create sx={{
                    position:'absolute',
                    top:'65%',
                    right: '0'
                }}/>}
            </div>
            {displayUpdate ? <button className="profile-button" onClick={submitUpdatedUser}>Update Profile</button>:<></>}
            {userState.loggedInUser?._id === userState.profileUser?._id ? <button className="profile-button" onClick={logout}>Logout of Account</button>:<></>}
        </form>
    )
}