import { Request,Response } from "express";
import { findAllUsers,findUserById,removeUser,modifyUser } from "../services/userservice";
import { UserDoesNotExistError } from "../utils/LibraryErrors";

async function getAllUsers(req:Request,res:Response) {
    try{
        let users = await findAllUsers();
        res.status(200).json({message:"users retrived successfully,users",users});
    }
    catch(error:any){
        res.status(500).json({message:"unable to retrive users at this time",error: error.message});
    }   
}

async function getUserById(req:Request,res:Response) {
    const userId =req.params.userId;
    try{
        let user = await findUserById(userId);
        res.status(200).json({message:"users retrived successfully,users",user});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"user requested does not exist"});
        }
        else{
        res.status(500).json({message:"could not find user",error: error.message});
        }
    }
}

async function updateUser(req:Request,res:Response) {
    const user=req.body;
    try{
        let updateUser=await modifyUser(user);
        res.status(202).json({message: "user updated successfully", user:updateUser});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"user requested does not exist"});
        }
        else{
        res.status(500).json({message:"unable to update the user currently",error: error.message});
        }
    }
}
async function deleteUser(req:Request,res:Response) {
    const userId =req.params.userId;
    try{
        await removeUser(userId);
        res.status(202).json({message: "user deleted successfully"});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"user requested does not exist"});
        }
        else{
        res.status(500).json({message:"unable to deletet user at this time",error: error.message});
        }
    }
}
export default {getAllUsers,getUserById,updateUser,deleteUser}