import BackForth from "../assets/BackForth";
import BackThree from "../assets/BackThree";
import ProcessApplication from "../assets/ProcessApplication";
import ProcessCard from "../assets/ProcessCard";
import ProcessConsulting from "../assets/ProcessConsulting";
import ButtonStep from "./ButtonStep";

import ProcessTitle from "./ProcessTitle";

export default function ProcessContents() {
  const processItems = [
    {
      no: "01",
      title: "상담신청 및 정보 기재",
      description:
        "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
      imgUrl: <ProcessConsulting />,
      buttonTitle: <ButtonStep link="/proceed#step1" />,
    },
    {
      no: "02",
      title: "국민내일배움카드 신청",
      description:
        "HRD(직업훈련포털)에서 회원가입 후 ▶ 카드발급신청 ▶ 은행(농협, 신한은행) 방문 후 카드수령하시면 됩니다.",
      imgUrl: <ProcessCard />,
      buttonTitle: <ButtonStep link="/proceed#step2" />,
    },
    {
      no: "03",
      title: "HRD에서 과정 신청",
      description:
        "카드수령 후 ▶HRD홈페이지에서 ▶대구한의대학교 검색 후 ▶ 스프링프레임워크기반 빅데이터 시각화과정 온라인 수강신청하기",
      imgUrl: <BackThree />,
      buttonTitle: <ButtonStep link="/proceed#step3" />,
    },
    {
      no: "04",
      title: "국민취업지원제도 신청",
      description:
        "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
      imgUrl: <BackForth />,
      buttonTitle: <ButtonStep link="/proceed#step4" />,
    },
    {
      no: "05",
      title: "지원신청서 및 개인정보동의서 제출",
      description:
        "본 웹페이지에서 제공하는 [지원신청서 및 개인정보제공공의서]를 다운로드 후에 작성하여 온라인 또는 직접 방문하여 제출하면 됩니다",
      imgUrl: <ProcessApplication />,
      buttonTitle: <ButtonStep link="/proceed#step5" />,
    },
  ];
  return (
    <div className="w-full flex flex-col py-16 space-y-8">
      {/* 1 */}
      {processItems.map((item, i) => (
        <ProcessTitle item={item} key={i} />
      ))}
    </div>
  );
}
