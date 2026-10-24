import {z} from "zod";

export const doctorQuerySchema = z.object(
    {
        search : z.string().trim().min(1).max(100).optional(),
        speacialty : z.string().trim().min(1).max(100).optional(),
        page: z.coerce.number().int().min(1).default(1),
        limit : z.coerce.number().int().min(1).max(50).default(1),
    }
)

export type DoctorQuery = z.infer<typeof doctorQuerySchema>;