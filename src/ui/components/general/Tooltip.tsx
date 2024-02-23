import { Positions, Tooltip } from "@/models/TooltipModel";

export default function Tooltip({ text, position, children }: Tooltip) {
  /**
   * Function to obtain the styles corresponding to the Tooltip position
   * @param position Tooltip Position
   * @returns Styles of the corresponding tooltip, empty string in case of invalid position
   */
  function getTooltipStyles(position: Positions) {
    switch (position) {
      case "top":
        return "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]";
      case "bottom":
        return "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]";
      case "right":
        return "top-1/2 -translate-y-1/2 left-[calc(100%+4px)]";
      case "left":
        return "top-1/2 -translate-y-1/2 right-[calc(100%+5px)]";
      default:
        return "";
    }
  }

  /**
   * Function to obtain the styles corresponding to the Arrow corresponding to the position of the tooltip
   * @param position Tooltip Position
   * @returns Styles of the corresponding arrow, empty string in case of invalid position
   */
  function getArrowStyles(position: Positions) {
    switch (position) {
      case "top":
        return "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-bg-tertiary";
      case "bottom":
        return "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-bg-tertiary";
      case "right":
        return "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-bg-tertiary";
      case "left":
        return "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-bg-tertiary";
      default:
        return "";
    }
  }

  return (
    <div id="tooltip" className="relative cursor-pointer group">
      <div> {children} </div>
      <span
        className={`absolute hidden group-hover:inline-block text-text-tertiary text-xs p-2 rounded-lg whitespace-nowrap ${getTooltipStyles(
          position
        )} bg-bg-tertiary`}
      >
        {" "}
        {text}{" "}
      </span>
      <span
        className={`absolute hidden group-hover:inline-block border-[5px] ${getArrowStyles(
          position
        )}`}
      ></span>
    </div>
  );
}
