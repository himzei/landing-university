import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SectionSm from "./SectionSm";
import TitleSection from "./TitleSection";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { handleConsulting } from "../api";

export default function Consulting() {
  const { handleSubmit, register } = useForm({ mode: "onChange" });

  const { mutate } = useMutation(handleConsulting);

  const onValid = (data) => {
    mutate(data);
  };

  return (
    <SectionSm>
      <div className="flex flex-col space-y-16">
        <div>
          <TitleSection
            section="consulting"
            mainTitle="사무관리원 양성과정 A to Z"
            subTitle="평생교육원에 문의주세요"
          />
        </div>
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-col w-full space-y-4">
            <Input {...register("name")} color="red" label="이름" />
            <Input {...register("tel")} type="tel" color="red" label="휴대폰" />
            <Input
              {...register("email")}
              type="email"
              color="red"
              label="이메일"
            />
            <Select {...register("category")} color="red" label="관심분야">
              <Option checked={"1"}>
                응용 SW 엔지니어링 멀티 사무관리원 양성과정
              </Option>
              <Option value={"2"}>기타</Option>
            </Select>
            <Textarea {...register("message")} color="red" label="문의내용" />
            <div className="flex w-full h-full items-center justify-between border border-gray-200 px-2">
              <Checkbox
                color="red"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    개인정보처리방침에 동의해주세요
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <div className="flex h-full items-center">
                <Button size="sm">내용보기</Button>
              </div>
            </div>
            <Button type="submit" color="red">
              전송하기
            </Button>
          </div>
        </form>
      </div>
    </SectionSm>
  );
}
