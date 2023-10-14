import ProcessApplicationImg from "./jpg/process-application.jpg";

export default function ProcessApplication() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        className="object-cover object-center w-full h-full"
        src={ProcessApplicationImg}
        alt="process-application"
      />
      <div className="bg-black/70 absolute inset-0 w-full h-full" />
    </div>
  );
}
