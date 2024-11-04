import React, { useState } from "react";
import axios from "axios";

// 사용자 ID로 API에서 사용자 이름을 가져오는 함수
export const fetchUserName = async (userId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data.name;
  } catch {
    throw new Error("사용자를 찾을 수 없습니다. ID를 확인하세요.");
  }
};

// 숫자 문자열을 받아 합을 계산하는 함수
export const calculateSum = (numbersString) => {
  const numbersArray = numbersString.split(",").map((numStr) => {
    const num = Number(numStr);
    if (isNaN(num) || numStr.trim() === "") {
      throw new Error("숫자 형식이 올바르지 않습니다.");
    }
    if (num < 0) {
      throw new Error("양의 정수만 입력하세요"); // 음수 값 예외 처리
    }
    return num;
  });
  return numbersArray.reduce((acc, num) => acc + num, 0);
};

function App() {
  const [id, setId] = useState("");
  const [numbers, setNumbers] = useState("");
  const [userName, setUserName] = useState("");
  const [sum, setSum] = useState(null);
  const [error, setError] = useState(""); // 오류 메시지 상태 추가

  const handleFetchAndCalculate = async () => {
    setError(""); // 오류 메시지 초기화
    try {
      const name = await fetchUserName(id);
      setUserName(name);
      const totalSum = calculateSum(numbers);
      setSum(totalSum);
    } catch (err) {
      setError(err.message); // 오류 메시지 출력
      setUserName("");
      setSum(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>사용자 정보와 숫자 합계 계산</h1>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID 값을 입력하세요"
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="숫자들을 입력하세요 (예: 4,5,9)"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={handleFetchAndCalculate}
          style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
        >
          조회하기
        </button>
      </div>
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}
      {userName && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <p>
            <strong>사용자 이름:</strong> {userName}
          </p>
          <p>
            <strong>숫자들의 합:</strong> {sum}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
