import { Button, ButtonTypes } from "@/models/ButtonModel";

export default function Button({ text, type, redirectTo }: Button) {
  function getButtonStyles(type: ButtonTypes) {
    switch (type) {
      case "primary":
        return "bg-bg-button-primary text-text-button-primary";
      case "secondary":
        return "bg-bg-button-secondary text-text-button-secondary";
      case "tertiary":
        return "bg-bg-button-tertiary text-text-button-tertiary";
      default:
        return "";
    }
  }

  const buttonStyles = getButtonStyles(type);

  return (
    <button className={`px-4 py-2 rounded-lg font-semibold ${buttonStyles}`}>
      {text}
    </button>
  );
}
