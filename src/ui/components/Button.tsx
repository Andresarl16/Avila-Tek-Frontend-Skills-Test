import { Button, ButtonTypes } from "@/models/ButtonModel";

export default function Button({ text, type, redirectTo, icon }: Button) {
  const button: Button = {
    text: text,
    type: type,
    redirectTo: redirectTo,
    icon: icon,
  };

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

  function getIconStyles(type: ButtonTypes) {
    switch (type) {
      case "primary":
        return "stroke-text-button-primary";
      case "secondary":
        return "stroke-text-button-secondary";
      case "tertiary":
        return "stroke-text-button-tertiary";
      default:
        return "";
    }
  }

  const buttonStyles = getButtonStyles(button.type);
  const iconStyles = getIconStyles(button.type);

  return (
    <button
      className={`flex justify-center items-center px-5 py-3 rounded-lg font-semibold ${buttonStyles}`}
    >
      {button.text}
      {button.icon ? (
        <button.icon className={`pl-2 ${iconStyles}`} width={20} height={20} />
      ) : (
        <></>
      )}
    </button>
  );
}
