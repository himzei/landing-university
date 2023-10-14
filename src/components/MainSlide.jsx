import { Typewriter } from "react-simple-typewriter";
import MainSlideBack from "../assets/jpg/main_slide_back.jpg";
import { Button } from "@material-tailwind/react";
import { BsPencilSquare } from "react-icons/bs";

export default function MainSlide() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
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
        <div className="max-w-6xl  w-full flex flex-col space-y-4  tracking-tight">
          <div className="absolute top-[30%] left-[10%] flex flex-col">
            <h1 className="text-5xl font-bold bg-white/50 px-4 py-2">
              대구한의대학교 평생교육원과 함께
            </h1>
            <h2 className="text-4xl font-extrabold text-red-500 bg-white/20 px-4 py-2">
              <Typewriter
                words={[
                  "하나. SW엔지니어링",
                  "둘. 전산세무회계",
                  "셋. 빅데이터분석",
                  "일타삼피! 3개의 과정을 학습할 수 있는 기회!!",
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
            <div className="text-gray-700 text-2xl flex flex-col px-4 py-2">
              <p>취업을 위한 필수과정,</p>
              <p>평생교육원과 함께 당신의 취업스펙을 성장시키세요.</p>
            </div>
            <div className="px-4 pt-8">
              <Button
                size="lg"
                variant="gradient"
                color="light-blue"
                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
              >
                상담신청하기
                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                  <BsPencilSquare size="20" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
