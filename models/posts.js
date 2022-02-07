const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    tags: {
        type: Array,
    },
    hits: {
        type: Number,
    },
    points: {
        type: Number,
    },
    comments: [{ date: String, userId: Number, content: String, points: Number }],
    date: {
        type: String,
    }
});

const Posts = mongoose.models.GDBPosts || mongoose.model("GDBPosts", Schema);

module.exports = Posts;