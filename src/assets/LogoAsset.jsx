import Logo from "./png/top_logo.png";

export default function LogoAsset() {
  return (
    <div className="w-full h-full flex items-center space-x-4">
      <img className="tablet:h-8 mobile:h-6" src={Logo} alt="logo" />
      <span className="tablet:text-xl mobile:text-sm">평생교육원</span>
    </div>
  );
}
