import LayoutSub from "../components/LayoutSub";
import Section from "../components/Section";
import NaeilImg from "../assets/png/naeil-beaum-card.png";
import ProcessTitle from "../components/ProcessTitle";
import ProcessConsulting from "../assets/ProcessConsulting";
import ButtonNaeilCard from "../components/ButtonNaeilCard";
import ProcessCard from "../assets/ProcessCard";
import ProcessConsultingImg from "../assets/png/proceed-consulting.png";
import BackThree from "../assets/BackThree";
import ProcessThirdImg from "../assets/png/process-third.png";
import ButtonConsulting from "../components/ButtonConsulting";
import ButtonTest from "../components/ButtonTest";
import ProcessForthImg from "../assets/png/process-forth.png";
import ButtonDownload from "../components/ButtonDownload";
import ProcessApplication from "../assets/ProcessApplication";
import PrivateInfoImg from "../assets/png/privateinfo001.png";
import BackForth from "../assets/BackForth";

export default function Proceed() {
  return (
    <div>
      <LayoutSub>
        <Section>
          <div className="py-32 flex flex-col space-y-32 items-center">
            {/* 상담신청서 작성하기 */}
            <div className="flex flex-col space-y-8 w-full" id="step1">
              <ProcessTitle
                item={{
                  no: "01",
                  title: "상담신청 및 정보 기재",
                  description:
                    "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
                  imgUrl: <ProcessConsulting />,
                  buttonTitle: <ButtonConsulting />,
                }}
              />
              <div className="border-4 border-gray-100 rounded-xl overflow-hidden">
                <img src={ProcessConsultingImg} alt="card" />
              </div>
            </div>

            {/* 국민 내일배움카드 신청 */}
            <div className="flex flex-col space-y-8" id="step2">
              {/* 1 */}
              <ProcessTitle
                item={{
                  no: "02",
                  title: "국민 내일배움 카드 신청",
                  description:
                    "하단 문의 양식에 고객님의 정보를 남겨주세요. 정보를 확인 후 빠른시일내로 전문가가 연락드립니다.",
                  imgUrl: <ProcessCard />,
                  buttonTitle: <ButtonNaeilCard />,
                }}
              />
              {/* 2 */}
              <div className="border-4 border-gray-100 rounded-xl overflow-hidden">
                <img src={NaeilImg} alt="card" />
              </div>
            </div>

            {/* HRD에서 과정신청 */}
            <div className="flex flex-col space-y-8" id="step3">
              {/* 1 */}
              <ProcessTitle
                item={{
                  no: "03",
                  title: "HRD에서 과정 신청",
                  description:
                    "카드수령 후 ▶HRD홈페이지에서 ▶대구한의대학교 검색 후 ▶ 스프링프레임워크기반 빅데이터 시각화과정 온라인 수강신청하기",
                  imgUrl: <BackThree />,
                  buttonTitle: <ButtonNaeilCard />,
                }}
              />
              {/* 2 */}
              <div className="border-4 border-gray-100 rounded-xl overflow-hidden">
                <img src={ProcessThirdImg} alt="card" />
              </div>
            </div>

            {/* 국민취업지원제도 바로가기 */}
            <div className="flex flex-col space-y-8" id="step4">
              {/* 1 */}
              <ProcessTitle
                item={{
                  no: "04",
                  title: "국민취업지원제도 신청",
                  description:
                    "온라인 수강신청 완료 후 국민취업지원제도 본인의 유형 확인 후 국민취업지원제도 신청",
                  imgUrl: <BackForth />,
                  buttonTitle: <ButtonTest />,
                }}
              />
              {/* 2 */}
              <div className="border-4 border-gray-100 rounded-xl overflow-hidden">
                <img src={ProcessForthImg} alt="card" />
              </div>
            </div>

            {/* 개인정보동의서 바로가기 */}
            <div className="flex flex-col space-y-8" id="step5">
              {/* 1 */}
              <ProcessTitle
                item={{
                  no: "05",
                  title: "지원신청서 및 개인정보제공동의서 제출",
                  description:
                    "본 웹페이지에서 제공하는 [지원신청서 및 개인정보제공공의서]를 다운로드 후에 작성하여 온라인 또는 직접 방문하여 제출하면 됩니다",
                  imgUrl: <ProcessApplication />,
                  buttonTitle: <ButtonDownload />,
                }}
              />
              {/* 2 */}
              <div className="border-4 border-gray-100 rounded-xl overflow-hidden">
                <img src={PrivateInfoImg} alt="card" />
              </div>
            </div>
          </div>
        </Section>
      </LayoutSub>
    </div>
  );
}
