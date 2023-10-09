import Logo from "./png/top_logo.png";

export default function LogoAsset() {
  return (
    <div className="w-full h-full flex items-center">
      <img className="h-12" src={Logo} alt="logo" />
    </div>
  );
}
