import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SectionSm from "./SectionSm";
import TitleSection from "./TitleSection";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { handleConsulting } from "../api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiCheckMark } from "react-icons/gi";

export default function Consulting() {
  const [privateCheck, setPrivateCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setPrivateCheck(true);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const { mutate } = useMutation(handleConsulting, {
    onSuccess: (data) => {
      if (data.result === 0) {
        reset();
        setPrivateCheck(false);
        return toast.success(data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (data.result === 1) {
        return toast(data.message);
      } else if (data.result === 2) {
        return toast(data.message);
      } else {
        return;
      }
    },
  });

  const onValid = (data) => {
    if (!privateCheck) {
      return toast.error("개인정보처리방침 동의해 주세요", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    mutate(data);
  };

  const handlePrivateCheck = () => {
    setPrivateCheck(!privateCheck);
  };

  return (
    <>
      <ToastContainer />
      {/* 다이얼로그 */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>개인정보처리방침</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Typography className="font-normal">
            대구한의대학교 평생교육원(이하 교육원)은 고객님의 개인정보를
            중요시하며, 정보통신망 이용촉진 및 정보보호 에 관한 법률을 준수하고
            있습니다.
            <br />
            <br />
            교육원은 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가
            어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
            조치가 취해지고 있는지 <br />
            알려드립니다.
            <br />
            교육원은 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는
            개별공지)을 통하여 공지할 것입니다.
            <br />
            <br />ο 본 방침은 : 2023년 10월 1일 부터 시행됩니다.
            <br />
            <br />
            1. 수집하는 개인정보 항목
            <br />
            교육원은 교육 관련상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
            <br />- 수집항목 : 이름, 휴대폰번호, 이메일
            <br />- 개인정보 수집방법 : 홈페이지(상담신청)
            <br />
            <br />
            2. 개인정보의 수집 및 이용목적
            <br />
            교육원는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            <br />- 교육 서비스 제공에 관한 상담 신청
            <br />- 마케팅 및 광고에 활용 및 이벤트 등 광고성 정보 전달
            <br />
            <br />
            3. 개인정보의 보유 및 이용기간
            <br />
            개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
            파기합니다.
            <br />
            <br />
            4. 개인정보의 파기절차 및 방법
            <br />
            교육원은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체없이 파기합니다.
            <br />
            파기절차 및 방법은 다음과 같습니다.
            <br />- 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제
            <br />
            <br />
            5. 개인정보 제공
            <br />
            교육원은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
            <br />- 이용자들이 사전에 동의한 경우
            <br />- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
            방법에 따라 수사기관의 요구가 있는 경우
            <br />
            <br />
            6. 수집한 개인정보의 위탁
            <br />
            교육원은 교육의 원활한 개인정보 업무처리를 위하여 아래 현황과 같이
            개인정보 처리업무를 위탁하고 있습니다.
            <br />① 수탁업체
            <br />
            <br />
            <br />
            7. 이용자 및 법정대리인의 권리와 그 행사방법
            <br />
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할
            수 있으며 가입해지를 요청할 수도 있습니다.
            <br />
            이용자들의 개인정보 조회,수정을 위해서는 개인정보변경 (또는
            회원정보수정 회원탈퇴 를 클릭하여 본인 확인 절차를 거치신
            <br />후 직접 열람, 정정 또는 탈퇴가 가능합니다.
            <br />
            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면
            지체없이 조치하겠습니다.
            <br />
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
            <br />
            또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
            처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
            하겠습니다.
            <br />
            교육원는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 교육원가
            수집하는 개인정보의 보유 및 이용기간 에 명시된 바에 따라 처리하고
            <br />그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            <br />
            <br />
            8. 개인정보에 관한 민원서비스
            <br />
            교육원는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
            처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를
            지정하고 있습니다.
            <br />
            <br />
            개인정보관리책임자 성명 : 조현일
            <br />
            전화번호 : 010-7186-0119
            <br />
            <br />
            귀하께서는 교육원의 서비스를 이용하시며 발생하는 모든 개인정보보호
            관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
            <br />
            교육원는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴
            것입니다.
            <br />
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
            <br />
            <br />
            1.개인분쟁조정위원회 (www.1336.or.kr/1336)
            <br />
            2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
            <br />
            3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
            <br />
            4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>확인</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* 본문 */}
      <SectionSm>
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <TitleSection
              section="consulting"
              mainTitle="사무관리원 양성과정 A to Z"
              subTitle="대구한의대학교 평생교육원에"
              subTitle2="문의주세요"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-gray-500">교육문의전화</h2>
              <p className="text-3xl">053)819-1037</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="flex flex-col w-full space-y-4">
              <Input
                {...register("name", {
                  required: "이름은 반드시 입력해 주셔야 합니다.",
                  minLength: {
                    value: 2,
                    message: "이름은 2글자 이상 입력해 주셔야 합니다.",
                  },
                  maxLength: {
                    value: 15,
                    message: "이름은 15글자 이하로 입력해 주셔야 합니다.",
                  },
                })}
                color="red"
                label="이름"
              />
              {errors?.name?.message && (
                <span className="text-red-600 text-sm">
                  {errors?.name?.message}
                </span>
              )}

              {/* 휴대폰번호 */}
              <Input
                {...register("tel", {
                  required: "전화번호는 반드시 입력해 주셔야 합니다.",
                  pattern: {
                    value: /^01[0-9]-?\d{3,4}-?\d{4}$/,
                    message: "전화번호 형식으로 숫자만 입력해 주세요.",
                  },
                })}
                type="tel"
                color="red"
                label="휴대폰"
              />
              {errors?.tel?.message && (
                <span className="text-red-600 text-sm">
                  {errors?.tel?.message}
                </span>
              )}

              <Input
                {...register("email", {
                  required: "이메일은 반드시 입력해 주셔야 합니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "이메일 형식으로 입력해 주세요.",
                  },
                })}
                type="email"
                color="red"
                label="이메일"
              />
              {errors?.email?.message && (
                <span className="text-red-600 text-sm">
                  {errors?.email?.message}
                </span>
              )}
              {/* <Select {...register("category")} color="red" label="관심분야">
                <Option>응용 SW 엔지니어링 멀티 사무관리원 양성과정</Option>
                <Option>기타</Option>
              </Select> */}

              <Input
                {...register("major")}
                type="text"
                color="red"
                label="학과"
              />
              <Input
                {...register("grade")}
                type="text"
                color="red"
                label="학년"
              />
              <Textarea
                {...register("message", {
                  required: "문의사항을 입력해 주세요.",
                  minLength: {
                    value: 5,
                    message: "문의내용은 5글자 이상 입력해 주세요.",
                  },
                })}
                color="red"
                label="문의내용"
              />
              {errors?.message?.message && (
                <span className="text-red-600 text-sm">
                  {errors?.message?.message}
                </span>
              )}

              <div className="flex w-full h-full items-center justify-between border border-gray-200 px-2 py-2">
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={handlePrivateCheck}
                >
                  <div className="w-5 h-5 border border-gray-400">
                    {privateCheck && <GiCheckMark />}
                  </div>
                  <p className="text-sm text-gray-700">
                    개인정보처리방침 동의합니다
                  </p>
                </div>
                <div className="flex h-full items-center">
                  <Button
                    onClick={handleOpen}
                    size="sm"
                    disabled={privateCheck}
                  >
                    내용보기
                  </Button>
                </div>
              </div>

              <Button type="submit" color="red">
                전송하기
              </Button>
            </div>
          </form>
        </div>
      </SectionSm>
    </>
  );
}
