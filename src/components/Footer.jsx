import LogoFootAsset from "../assets/LogoFootAsset";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

const iconLists = [
  { title: "facebook", icon: FaFacebookF },
  { title: "instagram", icon: FaInstagram },
  { title: "blog", icon: SiNaver },
  { title: "youtube", icon: FaYoutube },
];

export default function Footer() {
  return (
    <div className="w-full flex justify-center  z-10 bg-[#212428] py-16">
      <div className="max-w-5xl w-full flex flex-col justify-center">
        {/* 1 row */}
        <div className="w-full flex justify-between border-b-[0.5px] border-gray-600 pb-4">
          {/* 로고와 메뉴 */}
          <div className="flex w-9/12 items-center space-x-8">
            <div>
              <LogoFootAsset />
            </div>
            <ul className="flex space-x-4">
              <li className="cursor-pointer text-white">개인정보처리방침</li>
              <li className="cursor-pointer text-[#bdbdbd]">이용약관</li>
              <li className="cursor-pointer text-[#bdbdbd]">
                이에일무단수집거부
              </li>
            </ul>
          </div>
          {/* 아이콘 */}
          <div className="flex space-x-2 items-center">
            {iconLists.map((item, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-500 flex justify-center items-center text-white"
              >
                <item.icon />
              </div>
            ))}
          </div>
        </div>
        {/* 2 row */}
        <div className="w-full pt-4 flex flex-col space-y-1">
          <div className="flex space-x-4 text-[#bdbdbd]">
            <p className="">대구한의대학교 산학협력단</p>
            <p className="">ADDRESS. [38578] 경상북도 경산시 어봉지길 285-10</p>
            <p className="">TEL. 053-819-7804</p>
            <p className="">FAX. 053-819-1277</p>
          </div>
          <div className="text-[#646669] text-sm">
            <p>
              Copylight 2023. 대구한의대학교 산학협력단. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
