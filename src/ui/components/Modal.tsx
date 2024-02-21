"use client";

import { ReactNode } from "react";
import CloseIcon from "../icons/CloseIcon";

export default function Modal({
  visible = false,
  onClose,
  children,
  title,
}: {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
}) {
  if (!visible) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed flex min-h-[544px] justify-center items-center z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="w-full max-w-md m-4 p-4 text-text-primary bg-bg-primary rounded-2xl">
        <header className="flex justify-between items-center px-4">
          <h3 className="text-3xl text-center flex-grow ml-5"> {title} </h3>
          <CloseIcon
            onClick={() => onClose()}
            className="cursor-pointer ml-auto"
            width={20}
            height={20}
          />
        </header>
        <hr className="my-2 border-border-secondary" />
        <div className="max-h-96 overflow-auto mx-2 my-6">{children}</div>
      </div>
    </div>
  );
}
