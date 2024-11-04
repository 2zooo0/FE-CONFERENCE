const axios = require('axios');
const { fetchUserName, calculateSum } = require('./App');

jest.mock("axios"); // axios 모킹

describe("유저 이름 패치 기능", () => {
  beforeEach(() => {
    axios.get.mockReset(); // 각 테스트 실행되기 전 axios mock 초기화
  });

  test("ID 값으로 유저이름 잘 가져오는지 검증", async () => {
    const mockData = { data: { name: "Leanne Graham" } };
    axios.get.mockResolvedValueOnce(mockData);

    const userName = await fetchUserName(1);
    expect(userName).toBe("Leanne Graham");
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });
});

describe("덧셈 기능", () => {
  test("음수 값을 입력하면 오류를 발생시키는지 검증", () => {
    expect(() => calculateSum("4,-5,9")).toThrow("양의 정수만 입력하세요");
  });

  test("올바른 값을 입력하면 합계를 계산하는지 검증", () => {
    const result = calculateSum("4,5,9");
    expect(result).toBe(18); // 4 + 5 + 9 = 18
  });
});
