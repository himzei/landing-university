import { Typewriter } from "react-simple-typewriter";
import MainSlideBack from "../assets/png/main.png";
import ButtonConsulting from "./ButtonConsulting";

export default function MainSlide() {
  const handleType = () => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${MainSlideBack})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[600px] flex justify-center items-center relative border-4 rounded-3xl"
      >
        <div className="absolute inset-0 w-full h-full bg-white opacity-20" />
        <div className="max-w-6xl w-full flex flex-col mobile:space-y-0 tablet:space-y-4  tracking-tight">
          <div className="absolute top-[40%] mobile:left-[2%] tablet:left-[10%] flex flex-col">
            <h1 className="mobile:text-2xl tablet:text-4xl font-bold  mobile:px-2 tablet:px-4 mobile:py-0 tablet:py-2">
              2025년도 해외 일경험 프로그램
            </h1>
            <h2 className="mobile:text-xl tablet:text-3xl font-semibold text-white bg-black/20 mobile:px-2 tablet:px-4 mobile:py-0 tablet:py-2">
              <Typewriter
                words={[
                  "하나. 미용분야 인턴십",
                  "둘. 유급 실습 기회 제공",
                  "셋. 월150만원 체재비 지원",
                  "글로벌 역량을 갖춘 미래인재로 성장 기회!!!",
                ]}
                loop={7}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </h2>
            <div className="text-gray-100 mobile:text-md tablet:text-xl flex flex-col mobile:px-2 tablet:px-4 py-2">
              <p>취업을 위한 필수과정,</p>
              <p>평생교육원과 함께 당신의 취업스펙을 성장시키세요.</p>
            </div>
            <div className="mobile:px-2 tablet:px-4 pt-8">
              <ButtonConsulting />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
