// const express = require("express")  //common js방식 : 안쓰는 모듈도 포함됨..
import express from  "express"; //알아서 안쓰는거 바꿔줌.
import guestbookRouter from "./routes/guestbook.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

app.listen(PORT, ()=> {
    console.log(`${PORT}번 포트실행`);
});

//미들웨어(시행한뒤멀넘겨줌 응?)
// app.use((req,res,next)=> { //요청이 오면 실행시켜줌
//     console.log(`요청이 온 시간 : ${new Date().toISOString()}`);
//     next(); //이걸 안넣으면 뒤에 있는 라우터가 시행이 안됨.. 작업을 넘겨주는 코드
// });

// app.use(express.json()); //요청을 json으로 바꿔준다.
//대신
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(process.cwd(), "public")));

app.use('/guestbook', guestbookRouter);

//라우터
app.get('/', (req, res)=> {
    res.send("루트 경로 입니다.");
}) ;// /경로에 콜백에 리퀘스트 리스펀스 인자로 받아
