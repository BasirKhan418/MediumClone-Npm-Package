
import { z } from 'zod';
//SignUp Schema
export const SignUpSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6),
})
export  type SignUpSchemaType = z.infer<typeof SignUpSchema>
//SignIn Schema
export const SignInSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6),
})
export type SignInSchemaType = z.infer<typeof SignInSchema>
//Blog Schema
export const BlogSchema = z.object({
    title:z.string(),
    content:z.string(),
    published:z.boolean(),
    authorid:z.string(),
})
export type BlogSchemaType = z.infer<typeof BlogSchema>
//update Blog Schema
export const UpdateBlogSchema = z.object({
    title:z.string(),
    content:z.string(),
    published:z.boolean(),
    id:z.string(),
})
export type UpdateBlogSchemaType = z.infer<typeof UpdateBlogSchema>
