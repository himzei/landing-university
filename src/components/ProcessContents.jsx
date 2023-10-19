import { Button } from "@material-tailwind/react";
import ProcessApplication from "../assets/ProcessApplication";
import ProcessCard from "../assets/ProcessCard";
import ProcessConsulting from "../assets/ProcessConsulting";

export default function ProcessContents() {
  const processItems = [
    {
      no: "01",
      title: "상담신청 및 정보 기재",
      description:
        "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
      imgUrl: <ProcessConsulting />,
      buttonTitle: "상담신청하기",
    },
    {
      no: "02",
      title: "내일배움 카드 신청",
      description:
        "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
      imgUrl: <ProcessCard />,
      buttonTitle: "상담신청하기",
    },
    {
      no: "03",
      title: "지원신청서 및 개인정보동의서 제출",
      description:
        "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
      imgUrl: <ProcessApplication />,
      buttonTitle: "상담신청하기",
    },
  ];
  return (
    <div className="w-full flex flex-col py-16 space-y-8">
      {/* 1 */}
      {processItems.map((item, i) => (
        <div
          key={i}
          className="w-full h-[300px] border border-gray-300 rounded-[25px] flex mobile:flex-col tablet:flex-row justify-between px-12 mobile:py-8 tablet:py-16 relative overflow-hidden group "
        >
          <div className="absolute inset-0 w-full h-full group-hover:scale-125 transition-all duration-300">
            {item.imgUrl}
          </div>
          {/* 1 */}
          <div className="flex flex-col space-y-3 z-10 text-white">
            <div>
              <span className="text-red-600 mobile:text-xl tablet:text-3xl font-bold">
                {item.no}
              </span>
              <h2 className="mobile:text-xl tablet:text-4xl font-bold">
                {item.title}
              </h2>
            </div>
            <p className="mobile:text-xm tablet:text-md">{item.description}</p>
          </div>
          {/* 2 */}
          <div className="flex items-end z-10">
            <Button
              className="group-hover:bg-white group-hover:text-red-600"
              color="red"
            >
              outlined
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
