import { OctagonX, TriangleAlert } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: "warning" | "info";
}

const Alert = ({ children, type }: Props): JSX.Element => (
  <div className="flex gap-2 p-4 rounded-md mt-7 border border-secondary text-tertiary">
    <div className="w-fit">
      {type === "warning" ? (
        <OctagonX className="w-5 h-5" />
      ) : (
        <TriangleAlert className="w-5 h-5" />
      )}
    </div>
    <div className="not-prose text-sm">{children}</div>
  </div>
);

export default Alert;
