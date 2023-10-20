import InfoImg from "../assets/jpg/info.jpg";
import PosterImg from "../assets/jpg/poster.jpg";
import PosterImg2 from "../assets/png/poster2.png";

export default function Leaflet() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl w-full flex flex-col space-y-2">
        {/*  */}
        {/* <div className="w-full h-full flex flex-col">
          <div className="w-full h-20 flex justify-center items-center">
            <div className="h-10">
              <img
                className="w-full h-full object-cover object-center"
                src="https://www.dhu.ac.kr/HOME/lifelong/data/designImages/logo.png"
                alt="logo"
              />
            </div>
            <div className="text-2xl font-semibold px-2">평생교육원</div>
          </div>
          <div className="w-full h-[400px] border-[10px] border-red-600 px-4 py-8 text-xl flex flex-col justify-between space-y-8">
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-bold">
                응용 SW 엔지니어링 멀티 사무관리원 양성과정
              </h1>
              <div className="space-y-0 text-xl">
                <h2>훈련비 전앤무료 X 훈련수당(316,000원)</h2>
                <h2>SW 엔지니어링 X 전산세무회계 X 빅데이터분석</h2>
              </div>
              <div className="text-gray-500 flex flex-col space-y-0">
                <p>안녕하세요 대구한의대학교 평생교육원입니다.</p>
                <p>
                  평생교육원에서 [응용 SW 엔지니어링 멀티 사무관리원 양성과정]을
                  모집하오니 관심있으신 분들의 많은 참벼부착드립니다.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center animate-pulse">
              <a
                href="https://university-bigdata.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-red-500 px-20 py-4 text-white rounded-[40px] font-semibold hover:bg-red-600">
                  자세히보기
                </button>
              </a>
            </div>
          </div>
        </div> */}

        {/* 1 */}
        <div className="w-full h-full">
          <a
            href="https://university-bigdata.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full h-full object-cover"
              src={InfoImg}
              alt="poster"
            />
          </a>
        </div>
        {/* 3 */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={PosterImg}
            alt="poster"
          />
        </div>

        {/* 4 */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={PosterImg2}
            alt="poster"
          />
        </div>
      </div>
    </div>
  );
}
