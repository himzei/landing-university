export default function TitleSection({ section, mainTitle, subTitle, size }) {
  return (
    <div className="w-full flex flex-col space-y-4">
      <h2 className=" uppercase font-semibold text-red-600">{section}</h2>
      <div
        className={`${
          size === "lg" ? "text-5xl" : "text-3xl"
        } font-bold leading-tight trackging-tight`}
      >
        <p className="font-light">{mainTitle}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
