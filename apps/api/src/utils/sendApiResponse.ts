import type { Response } from "express";
import { ApiResponse } from "./ApiResponse.js";


export function sendApiResponse<T>(
    res: Response,
    statusCode:number,
    message:string,
    data: T
){

    const response = new ApiResponse(statusCode,message,data);

    return res.status(statusCode).json(response);

}