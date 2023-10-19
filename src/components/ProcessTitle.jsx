export default function ProcessTitle({ item }) {
  return (
    <div className="w-full h-[300px] border border-gray-300 rounded-[25px] flex mobile:flex-col tablet:flex-row justify-between px-12 mobile:py-8 tablet:py-16 relative overflow-hidden group ">
      <div className="absolute inset-0 w-full h-full group-hover:scale-125 transition-all duration-300">
        {item.imgUrl}
      </div>
      {/* 1 */}
      <div className="flex flex-col space-y-3 z-10 text-white">
        <div>
          <span className="text-red-600 mobile:text-xl tablet:text-3xl font-bold">
            {item.no}
          </span>
          <h2 className="mobile:text-xl tablet:text-4xl font-bold">
            {item.title}
          </h2>
        </div>
        <p className="mobile:text-xm tablet:text-md">{item.description}</p>
      </div>
      {/* 2 */}
      <div className="flex items-end z-10">{item.buttonTitle}</div>
    </div>
  );
}
