import { Button } from "@material-tailwind/react";
import { AiFillCreditCard } from "react-icons/ai";

export default function ButtonDownload() {
  return (
    <Button
      size="lg"
      variant="gradient"
      color="light-blue"
      className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
    >
      신청서 다운로드
      <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
        <AiFillCreditCard size="20" />
      </span>
    </Button>
  );
}
