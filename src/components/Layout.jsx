// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full bg-red-500">{children}</div>
    </div>
  );
}
