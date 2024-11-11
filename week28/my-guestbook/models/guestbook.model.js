import mongoose from "mongoose";

const guestbookSchema = new mongoose.Schema({
    //테이블
    author: {type: String, required : true},
    message: {type: String, required: true},
    createdAt : {type: Date, default: Date.now },
});

//스키마 가지고 모델을 만들어
const GuestBook = mongoose.model('GuestBook', guestbookSchema);

export default GuestBook;