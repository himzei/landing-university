import PosterImg from "../assets/jpg/poster.jpg";
import TitleSection from "./TitleSection";

export default function Poster() {
  return (
    <div className="w-full flex flex-col space-y-16 py-32">
      {/* title */}
      <TitleSection
        section="outline"
        mainTitle="대구한의대 학생들의 취업성공을"
        subTitle="이끌어내기 위해 노력합니다"
        size="lg"
      />
      {/* 본문 */}
      <div className="grid grid-cols-2">
        {/* 1 */}
        <div></div>
        {/* 2 */}
        <div>
          <img src={PosterImg} alt="poster-img" />
        </div>
      </div>
    </div>
  );
}
