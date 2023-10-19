import { Button } from "@material-tailwind/react";
import { BsPencilSquare } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

export default function ButtonConsulting() {
  return (
    <HashLink smooth to="/#consulting">
      <Button
        size="lg"
        variant="gradient"
        color="light-blue"
        className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      >
        상담신청하기
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <BsPencilSquare size="20" />
        </span>
      </Button>
    </HashLink>
  );
}
