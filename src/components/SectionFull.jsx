export default function SectionFull({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
