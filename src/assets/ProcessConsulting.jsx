import ProcessConsultingImg from "./jpg/process-consulting.jpg";

export default function ProcessConsulting() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        className="object-cover object-center w-full h-full"
        src={ProcessConsultingImg}
        alt="process-consulting"
      />
      <div className="bg-black/70 absolute inset-0 w-full h-full" />
    </div>
  );
}
