export default function TitleSection({
  section,
  mainTitle,
  subTitle,
  subTitle2,
  size,
  color,
}) {
  return (
    <div className="w-full flex flex-col space-y-4">
      <h2
        className={`uppercase font-semibold ${
          color === "white" ? "text-white" : "text-red-600"
        }`}
      >
        {section}
      </h2>
      <div
        className={`${size === "lg" ? "text-5xl" : "text-3xl"} ${
          color === "white" && "text-white"
        } font-bold leading-tight trackging-tight`}
      >
        <p className="font-light">{mainTitle}</p>
        <p>{subTitle}</p>
        <p>{subTitle2}</p>
      </div>
    </div>
  );
}
