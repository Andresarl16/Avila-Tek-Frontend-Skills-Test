import { Input } from "@/models/InputModel";
import QuestionMarkIcon from "../../icons/QuestionMarkIcon";
import Tooltip from "./Tooltip";

export default function Input({
  placeholder,
  tooltip,
  className,
  value,
  onChange,
}: Input) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-3 space-x-2 rounded-lg bg-bg-primary ${className}`}
    >
      <input
        className="w-full text-text-placeholder outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {tooltip ? (
        <Tooltip text={tooltip} position="top">
          {" "}
          <QuestionMarkIcon width={16} height={16} />{" "}
        </Tooltip>
      ) : (
        <></>
      )}
    </div>
  );
}
