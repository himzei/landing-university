import LogoFoot from "./png/foot_logo.png";

export default function LogoFootAsset() {
  return (
    <div className="w-full h-full flex items-center">
      <img className="h-12" src={LogoFoot} alt="logo-foot" />
    </div>
  );
}
