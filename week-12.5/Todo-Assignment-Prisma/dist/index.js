"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const signupSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email()
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedSchema = signupSchema.safeParse(req.body);
    const success = parsedSchema.success;
    if (!success) {
        return res.status(411).json({
            msg: "wrong inputs"
        });
    }
    const exUser = yield prisma.user.findFirst({
        where: {
            username: req.body.username,
            email: req.body.email
        }
    });
    if (exUser) {
        return res.status(403).json({
            msg: "email or username already taken use different"
        });
    }
    yield prisma.user.create({
        data: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    });
    res.json({
        message: "User created successfully",
    });
    return;
}));
app.listen(3000);
