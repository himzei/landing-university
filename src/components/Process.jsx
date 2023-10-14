import StarImg from "../assets/jpg/star.jpg";
import Section from "./Section";
import TitleSection from "./TitleSection";

export default function Process() {
  return (
    <div
      className="w-full h-[430px] bg-black relative"
      style={{
        backgroundImage: `url(${StarImg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/50 absolute inset-0 py-32">
        <Section>
          <div className="flex flex-col">
            {/* 타이틀 */}
            <TitleSection
              section="Process"
              mainTitle="멀티 사무관리원 양성과정  "
              subTitle="등록절차와 관련서류를 알려드립니다"
              size="lg"
              color="white"
            />
            {/* 본문 */}
          </div>
        </Section>
      </div>
      {/* section */}
    </div>
  );
}
