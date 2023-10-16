import { Button } from "@material-tailwind/react";
import LogoAsset from "../assets/LogoAsset";
import { menuItems } from "../lib/menuItems";
import MenuMobile from "./MenuMobile";

export default function Header() {
  const onClickMenu = (e) => {
    e.preventDefault();
    const MemuData = e.target.hash;
    console.log(MemuData);
    const IdMatchedPage = document.querySelector(MemuData);
    IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full px-2 mobile:h-12 tablet:h-24 flex justify-between bg-white items-center">
      <div className="w-full flex justify-center  shadow-sm ">
        <div className="max-w-6xl w-full px-2">
          <div className="w-full h-full flex  tablet:justify-between items-center">
            {/* 로고 */}
            <div className="h-full ">
              <LogoAsset />
            </div>
            {/* 메뉴 */}
            <div className="flex h-full items-center space-x-6">
              <ul className="flex space-x-4 text-lg">
                {menuItems.map(({ title, idx }) => (
                  <a
                    onClick={onClickMenu}
                    key={idx}
                    href="#consulting"
                    className="px-2 py-2 cursor-pointer hover:text-red-500 transition-all duration-300 mobile:hidden tablet:block"
                  >
                    {title}
                  </a>
                ))}
              </ul>

              <a
                href="#consulting"
                onClick={onClickMenu}
                color="red"
                size="sm"
                className="items-center mobile:hidden tablet:block bg-red-500 text-white px-4 py-2  hover:bg-red-600 transition-all duration-300 rounded-lg"
              >
                상담신청하기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" mobile:block tablet:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}
