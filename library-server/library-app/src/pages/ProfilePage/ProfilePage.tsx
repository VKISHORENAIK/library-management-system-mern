import React, { useEffect } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

import './ProfilePage.css'
import { AppDispatch,RootState } from "../../redux/ReduxStore";
import { FetchUser } from "../../redux/slices/AuthenticationSlice";
import { UpdateUserForm } from "../../features/profile";

export default function ProfilePage(){
    const loggedInUser = useSelector((state:RootState)=>state.authentication.loggedInUser);
    const ProfileUser = useSelector((state:RootState)=>state.authentication.profileUser);
    const dispatch:AppDispatch=useDispatch();
    const {userId}=useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(userId){
            if(loggedInUser?._id===userId || loggedInUser?.type === 'EMPLOYEE'){
                dispatch(FetchUser({
                    userId,
                    property:'profileUser'
                }));
            } else{
                navigate("/");
            }
        }
    },[userId])
    return (
        <div className="page">
            <div className="page-container">
                <h1>{ProfileUser?.firstName} {ProfileUser?.lastName}'s Profile</h1>
                <div className="profile-page-cols">
                    <div className="profile-page-left-column">
                        <UpdateUserForm />
                    </div>
                    <div className="profile-page-right-column">

                    </div>
                </div>
                
            </div>
        </div>
    )
}