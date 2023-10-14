import ProcessCardImg from "./jpg/process-card.jpg";

export default function ProcessCard() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        className="object-cover object-center w-full h-full"
        src={ProcessCardImg}
        alt="process-card"
      />
      <div className="bg-black/70 absolute inset-0 w-full h-full" />
    </div>
  );
}
