import Wrapper from "@/components/wrapper";

export default function WorksLayout({ children, team, analytics }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        {children}
        {analytics}
        {team}
      </div>
    </div>
  );
}
