export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'flex justify-center flex-col items-center p-9 shadow-md border border-gray-50-100 rounded-md'
      }
    >
      {children}
    </div>
  );
}
