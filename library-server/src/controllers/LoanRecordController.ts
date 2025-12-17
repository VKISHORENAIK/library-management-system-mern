import { Request,Response } from "express";
import { findAllRecords,generateRecord,modifyRecord, queryRecords } from "../services/LoanRecordService";
import { LoanRecordDoesNotExistError } from "../utils/LibraryErrors";

async function createdRecord(req:Request,res:Response) {
    let record = req.body;

    try{
        let createdRecord = await generateRecord(record);
        res.status(201).json({message: "New record generated",record: createdRecord});
    } catch(error){
        res.status(500).json({message:"something went wrong", error});
    }
}

async function updatedRecord(req:Request,res:Response) {
    let record = req.body;

    try{
        let updatedRecord = await modifyRecord(record);
        res.status(200).json({message: "record updated successfully",record: updatedRecord});
    } catch(error){
        if(error instanceof LoanRecordDoesNotExistError){
            res.status(404).json({message:"unable to modify record", error: error.message});   
        } else {
        res.status(500).json({message:"something went wrong", error});
        }
    }
}

async function getAllRecords(req:Request,res:Response) {
    try{
        let records = await findAllRecords();

        res.status(200).json({message: "retrived all records successfully",records});
    } catch(error){
        res.status(500).json({message:"unable to retrive records at this time", error});
    }
}

async function getRecordsByProperty(req:Request,res:Response) {
    let param= req.body;
    try{
        let records = await queryRecords(param);
        res.status(200).json({message: "retrived records from your query",records});
    } catch(error){
        res.status(500).json({message:"unable to retrive records at this time", error});
    }
}

export default {createdRecord, updatedRecord, getAllRecords, getRecordsByProperty};