import { z } from 'zod';
export declare const SignUpSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export declare const SignInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
export declare const BlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
    authorid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
    authorid: string;
}, {
    title: string;
    content: string;
    published: boolean;
    authorid: string;
}>;
export type BlogSchemaType = z.infer<typeof BlogSchema>;
export declare const UpdateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
    id: string;
}, {
    title: string;
    content: string;
    published: boolean;
    id: string;
}>;
export type UpdateBlogSchemaType = z.infer<typeof UpdateBlogSchema>;
