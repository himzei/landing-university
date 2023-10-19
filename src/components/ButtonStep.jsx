import { Button } from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";

export default function ButtonStep({ link }) {
  return (
    <HashLink to={link}>
      <Button size="lg" color="red">
        자세히보기
      </Button>
    </HashLink>
  );
}
