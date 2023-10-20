import Application from "./jpg/application.jpg";

export default function BackThree() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        className="object-cover object-center w-full h-full"
        src={Application}
        alt="process-card"
      />
      <div className="bg-black/70 group-hover:bg-black/40 transition-all duration-300 absolute inset-0 w-full h-full" />
    </div>
  );
}
