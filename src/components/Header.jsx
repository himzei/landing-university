import LogoAsset from "../assets/LogoAsset";
import { menuItems } from "../lib/menuItems";

export default function Header() {
  return (
    <div className="w-full flex justify-center h-20 shadow-sm fixed z-10 bg-white">
      <div className="max-w-5xl w-full">
        <div className="w-full h-full flex justify-between items-center">
          {/* 로고 */}
          <div className="h-full ">
            <LogoAsset />
          </div>
          {/* 메뉴 */}
          <div className="flex h-full items-center space-x-6">
            <ul className="flex space-x-4 text-lg">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className="px-2 py-2 cursor-pointer hover:text-red-500 transition-all duration-300"
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="border px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer shadow-sm hover:bg-red-600 hover:shadow-lg transition-all duration-300 text-lg">
              상담신청하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
