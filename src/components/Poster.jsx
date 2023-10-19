import PosterImg from "../assets/jpg/poster.jpg";
import { outlineContents } from "../lib/outlineContents";
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
      <div className="grid mobile:grid-cols-1 space-y-8 tablet:grid-cols-2">
        {/* 1 */}
        <div className="flex flex-col space-y-8">
          {outlineContents.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex flex-col space-y-2">
                {/* number */}
                <div className="flex items-center">
                  <p className="text-red-500 font-semibold mr-2">{item.no}</p>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <div className="pl-2 text-gray-700">
                  {/* 내용 */}
                  <p className="">{item.content1}</p>
                  {item.content2 && <p className=" ">{item.content2}</p>}
                  {item.content3 && <p className=" ">{item.content3}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 2 */}
        <div>
          <img src={PosterImg} alt="poster-img" />
        </div>
      </div>
    </div>
  );
}
