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
const todoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    done: (0, zod_1.boolean)().default(false)
});
app.post("/newtodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedSchema = todoSchema.safeParse(req.body);
    const success = parsedSchema.success;
    if (!success) {
        return res.status(403).json({
            msg: "wrong inputs"
        });
    }
    const username = req.headers.username;
    const email = req.headers.email;
    if (!username || !email) {
        return res.json({
            msg: "null field "
        });
    }
    const user = yield prisma.user.findUnique({
        where: {
            username: username,
            email: email
        }
    });
    if (!user) {
        return res.status(404).json({
            msg: "galat user"
        });
    }
    yield prisma.todos.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            done: req.body.done,
            userId: user.id,
        }
    });
    res.json({
        message: "Todo created successfully",
    });
    return;
}));
app.get("/gettodos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.headers.username;
    const email = req.headers.email;
    if (!username || !email) {
        return res.json({
            msg: "null field"
        });
    }
    const user = yield prisma.user.findUnique({
        where: { username, email }
    });
    if (!user) {
        return res.json({
            msg: "u are not a user"
        });
    }
    const todos = yield prisma.todos.findMany({
        where: { userId: user.id }
    });
    return res.json({
        todos
    });
}));
app.listen(3000);
