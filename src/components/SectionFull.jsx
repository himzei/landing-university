export default function SectionFull({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-red-500">{children}</div>
    </div>
  );
}
