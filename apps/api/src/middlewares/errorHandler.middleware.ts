import  type {ErrorRequestHandler} from "express";
import {ApiError} from "../utils/ApiError.js";

export const errorHandler : ErrorRequestHandler=(err,_req,res,_next)=>{
    const isApiError = err instanceof ApiError ;
    const statusCode = isApiError? err.statusCode :500;

    const message = isApiError? err.message : "Internal server error";

    if (!isApiError) {
        console.error("Unexpected API Error");

    }

    res.status(statusCode).json({
        success:false,
        message
    });
};