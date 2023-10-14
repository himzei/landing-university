import { AiOutlinePlus } from "react-icons/ai";
import TitleSection from "./TitleSection";
import Section from "./Section";
import CityImg from "../assets/jpg/city.jpg";

export default function Features() {
  const itemLists1 = [
    {
      number: "01",
      title: "훈련비 전액부료",
      description:
        "공장에서 찍어내는 마케팅은 그만! 중국 마케팅을 왜 한국첩체에만 하시나요?",
      imgUrl:
        "https://images.unsplash.com/photo-1586595847028-8f459a1e58a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3564&q=80",
      link: "#",
    },
    {
      number: "02",
      title: "훈련수당",
      description:
        "공장에서 찍어내는 마케팅은 그만! 중국 마케팅을 왜 한국첩체에만 하시나요?",
      imgUrl:
        "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3626&q=80",
      link: "#",
    },
  ];

  const itemLists2 = [
    {
      number: "03",
      title: "SW 엔지니어링",
      description:
        "공장에서 찍어내는 마케팅은 그만! 중국 마케팅을 왜 한국첩체에만 하시나요?",
      imgUrl:
        "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80",
      link: "#",
    },
    {
      number: "04",
      title: "전산세무회계",
      description:
        "공장에서 찍어내는 마케팅은 그만! 중국 마케팅을 왜 한국첩체에만 하시나요?",
      imgUrl:
        "https://images.unsplash.com/photo-1682686581218-82326951f4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80",
      link: "#",
    },
    {
      number: "05",
      title: "빅데이터분석",
      description:
        "공장에서 찍어내는 마케팅은 그만! 중국 마케팅을 왜 한국첩체에만 하시나요?",
      imgUrl:
        "https://images.unsplash.com/photo-1697082390841-bbe568972ac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3571&q=80",
      link: "#",
    },
  ];
  return (
    <div className="w-full py-32  relative">
      <div
        style={{
          background: `url(${CityImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[650px] absolute bottom-0 -z-10 bg-red-100"
      >
        <div className="w-full h-full bg-white opacity-80" />
      </div>
      <Section>
        <div className="w-full flex flex-col space-y-16 px-2">
          {/* 타이틀 */}

          {/* 본문1 */}
          <div className="w-full flex gap-8 relative">
            {itemLists1.map((item, i) => (
              <div
                key={i}
                className="bg-white w-[340px] aspect-square py-10 border border-gray-200 shadow-xl flex flex-col justify-between space-y-8 rounded-lg"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-green-600">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-3">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20 bg-lime-700 translate-x-4 overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute right-0">
              <TitleSection
                section="feature"
                mainTitle="과정특징"
                subTitle="과정특징"
              />
            </div>
          </div>

          {/* 본문2 */}
          <div className="w-full flex justify-end gap-8">
            {itemLists2.map((item, i) => (
              <div
                key={i}
                className="w-[320px] aspect-square py-10 border border-gray-200 shadow-xl flex flex-col justify-between space-y-8 rounded-lg bg-white"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-green-600">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-3">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20 bg-lime-700 translate-x-4 overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
