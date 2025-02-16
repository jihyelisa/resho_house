import { Link } from "react-router-dom";

const EventList = () => {
  const events = [
    "유진이의 클럼지 벗 해피 라이프",
    "지민이의 당 줄이기 도전",
    "경민이의 헬창일까 아닐까",
    "지혜의 코딩 왜 시작했지",
    "수경이의 실전 미국영어",
    "감자의 하루 십만 자를 써봐요",
    "채원이의 미스테리 서클",
    "정희의 사이버 조각 깎기",
    "소영이의 트릴링구얼로 가는 길",
  ];

  return (
    <div className="text-center flex-grow flex flex-col items-center">
      <span className="fixed top-14 flex-grow bg-white w-full py-4">
        <h2 className="text-3xl font-bold">Events</h2>
        <p className="text-gray-600">이벤트 리스트</p>
      </span>
      <div className="flex flex-col flex-grow gap-3 w-full mt-[92px]">
        {events.map((event, index) => (
          <Link key={index} to={`/eventdetail/${index}`}>
            <span
              key={index}
              className="flex justify-start items-center p-3 px-6 rounded-md bg-blue-100 text-gray-900"
            >
              {event}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;
