export default function Section({ children }) {
  return (
    <div className="w-full flex justify-center px-2">
      <div className="max-w-6xl w-full">{children}</div>
    </div>
  );
}
