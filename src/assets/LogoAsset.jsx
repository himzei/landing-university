import Logo from "./png/top_logo.png";

export default function LogoAsset() {
  return (
    <div className="w-full h-full flex items-center space-x-4">
      <img className="h-8" src={Logo} alt="logo" />
      <span className="text-xl">평생교육원</span>
    </div>
  );
}
