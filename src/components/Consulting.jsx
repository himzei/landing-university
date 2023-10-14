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

export default function Consulting() {
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
        <div className="flex flex-col w-full space-y-4">
          <Input color="red" label="이름" />
          <Input type="tel" color="red" label="휴대폰" />
          <Input type="email" color="red" label="이메일" />
          <Select color="red" label="관심분야">
            <Option>응용 SW 엔지니어링 멀티 사무관리원 양성과정</Option>
            <Option>기타</Option>
          </Select>
          <Textarea color="red" label="문의내용" />
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
          <Button color="red">전송하기</Button>
        </div>
      </div>
    </SectionSm>
  );
}
