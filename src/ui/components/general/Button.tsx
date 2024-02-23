"use client";

import { Button, ButtonTypes } from "@/models/ButtonModel";
import Link from "next/link";

export default function Button({
  text,
  type,
  actionType,
  redirectTo = "",
  onClick = () => {},
  icon,
  className,
}: Button) {
  const button: Button = {
    text: text,
    type: type,
    actionType: actionType,
    redirectTo: redirectTo,
    onClick: onClick,
    icon: icon,
    className: className,
  };

  /**
   * Function to obtain the styles corresponding to the selected button type.
   * @param type Button Type
   * @returns Styles of the corresponding type, empty string in case of invalid type
   */
  function getButtonStyles(type: ButtonTypes) {
    switch (type) {
      case "primary":
        return "bg-bg-button-primary text-text-button-primary hover:bg-utility-brand-700";
      case "secondary":
        return "bg-bg-button-secondary text-text-button-secondary hover:bg-bg-button-secondary-hover";
      case "tertiary":
        return "bg-bg-button-tertiary text-text-button-tertiary hover:text-utility-brand-800";
      default:
        return "";
    }
  }

  /**
   * Function to obtain the styles corresponding to the icon of the selected button type.
   * @param type Button Type
   * @returns Icon styles of the corresponding type, empty string in case of invalid type
   */
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

  const buttonContent = (
    <button
      onClick={button.onClick}
      type="button"
      className={`flex justify-center items-center px-5 py-3 rounded-lg font-semibold ${getButtonStyles(
        button.type
      )} ${className} transition-all duration-300 ease-in-out`}
    >
      {button.text}
      {button.icon ? (
        <button.icon
          className={`pl-2 ${getIconStyles(button.type)}`}
          width={20}
          height={20}
        />
      ) : (
        <></>
      )}
    </button>
  );

  if (button.actionType === "function") return buttonContent;

  if (button.actionType === "internal-redirect")
    return <Link href={button.redirectTo!}> {buttonContent} </Link>;

  if (button.actionType === "external-redirect")
    return (
      <a href={button.redirectTo} target="_blank">
        {buttonContent}
      </a>
    );
}
