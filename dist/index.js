"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogSchema = exports.BlogSchema = exports.SignInSchema = exports.SignUpSchema = void 0;
const zod_1 = require("zod");
//SignUp Schema
exports.SignUpSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
//SignIn Schema
exports.SignInSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
//Blog Schema
exports.BlogSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
    authorid: zod_1.z.string(),
});
//update Blog Schema
exports.UpdateBlogSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
    id: zod_1.z.string(),
});
