
import type { Request, Response } from "express";
import { sendApiResponse } from "../utils/sendApiResponse.js";

export const getHealth = (_req: Request, res: Response) => {
  return sendApiResponse(
    res,
    200,
    "Weblinic API is healthy",
    {
      service: "weblinic-api",
      timestamp: new Date().toISOString()
    }
  );
};
