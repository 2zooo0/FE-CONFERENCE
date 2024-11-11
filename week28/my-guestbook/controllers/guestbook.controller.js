//게스트북의 요청응답처리 로직들을 담당
import GuestBook from "../models/guestbook.model.js";

//전체방명록조회 메서드
export const getAllEntries = async(req, res) => {
    try{
        const entries = await GuestBook.find(); //알아서 전체 조회
        // res.status(200).json(entries);
        res.render('guestbook', {entries});
        //근데 이제 렌더링에 ..{entries}값을 보내고 싶어
    
    } catch(error) {
        res.status(500).json({message: "전체조회 과정에서 에러 발생", error});
    }
};

//아이디 조회 메서드
export const getEntryById = async (req, res) => {
    const [id] = req.params;//사용자가 요청 보낼 때 id 가져올수 ㅇ

    try{
        const entry = await GuestBook.findById(id);
        if(!entry){
            res.status(404).json({message: "해당하는 데이터가 없습니다."});
        }
        res.status(200).json({message: "특정 방명록 조회 성공"});
    } catch(error) {
        res.status(500).json({message: "특정 방명록 조회 과정에서 에러 발생", error});
    }
};
//생성 메서드
export const createEntry = async (req, res) => {
    const {author, message} = req.body; //프론트가 보낸 바디를 구조분해 할당해서 가져옴

    try{
        //새로운 객체인스턴스 만들기
        const newEntry = new GuestBook(({author, message}));
        //데이터베이스에 반영
        await newEntry.save();
        // res.status(201).json({message: "방명록 생성 성공"}) //201은 서버에 뭐가 추가한거
        res.redirect("/guestbook");
    } catch(error) {
        res.status(500).json({message: "생성 과정에서 에러 발생", error});
    }
};
//삭제 메서드
export const deleteEntryByID = async (req, res) => {
    const {id} = req.params;

    try{
        const result = await GuestBook.findByIdAndDelete(id);
        if (!result) { //id가 없다면
            return res.status(404).json({ message: "삭제할 데이터가 없음" });
        } //제대로 id값이 있다면
        res.status(200).json({ message: "삭제 성공" });
    } catch(error) {
        res.status(500).json({message: "삭제 과정에서 에러 발생", error});
    }
};
