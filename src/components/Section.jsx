export default function Section({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full">{children}</div>
    </div>
  );
}
