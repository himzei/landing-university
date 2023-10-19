import { Button } from "@material-tailwind/react";
import LogoAsset from "../assets/LogoAsset";
import { menuItems } from "../lib/menuItems";
import MenuMobile from "./MenuMobile";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full px-2 mobile:h-12 tablet:h-24 flex justify-between items-center shadow">
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full px-2">
          <div className="w-full h-full flex  tablet:justify-between items-center">
            {/* 로고 */}
            <div className="h-full ">
              <LogoAsset />
            </div>
            {/* 메뉴 */}
            <div className="flex h-full items-center space-x-6">
              <ul className="flex space-x-4 text-lg">
                {menuItems.map(({ link, title, idx }) => (
                  <Link to={link} key={idx}>
                    <li
                      className={`px-2 py-2 cursor-pointer ${
                        link === location.pathname && "text-red-600"
                      } hover:text-red-500 transition-all duration-300 mobile:hidden tablet:block`}
                    >
                      {title}
                    </li>
                  </Link>
                ))}
              </ul>

              <HashLink smooth to="/#consulting">
                <Button
                  color="red"
                  size="sm"
                  className="items-center mobile:hidden tablet:block"
                >
                  <h2 className="text-lg">상담신청하기</h2>
                </Button>
              </HashLink>
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
