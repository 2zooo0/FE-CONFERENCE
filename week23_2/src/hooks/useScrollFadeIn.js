//스크롤 위치에 따라 이미지 보임상태 업데이트
import { useEffect, useState } from 'react';

function useScrollFadeIn(threshold) {
  const [isVisible, setIsVisible] = useState(false); //보이는 상태 false로 초기화시켜놓기

  const handleScroll = () => {
    const scrollY = window.scrollY; //현재 스크롤 위치값
    const windowHeight = window.innerHeight; //혅ㅐ 창 높이!

    // 특정 위치에 도달하면 보여줌
    if (scrollY >= threshold * windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // 다시 안 보이게 추가
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
}

export default useScrollFadeIn;
