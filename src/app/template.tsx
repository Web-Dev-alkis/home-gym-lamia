export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="opacity-0 animate-fade-up" style={{ animationDuration: "0.7s" }}>
      {children}
    </div>
  );
}
