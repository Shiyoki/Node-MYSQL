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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.createPost = exports.getPostsId = exports.getPosts = void 0;
const database_1 = require("../database");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, database_1.connect)();
    const posts = yield conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
});
exports.getPosts = getPosts;
const getPostsId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield (0, database_1.connect)();
    const posts = yield conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(posts[0]);
});
exports.getPostsId = getPostsId;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
});
exports.createPost = createPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield (0, database_1.connect)();
    yield conn.query('DELETE FROM posts WHERE id = ?', [id]);
    return res.json({
        message: "Post deleted"
    });
});
exports.deletePost = deletePost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const update = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('UPDATE posts set ? WHERE id = ?', [update, id]);
    return res.json({
        message: "Post updated"
    });
});
exports.updatePost = updatePost;
