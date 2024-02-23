"use client";

import { ReactNode } from "react";
import CloseIcon from "../../icons/CloseIcon";

export default function Modal({
  visible = false,
  onClose,
  children,
  title,
  width,
}: {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
  width?: string;
}) {
  if (!visible) return null;

  /**
   * Function to manage that the modal closes when the backdrop is pressed
   * @param event Click Event
   */
  const handleBackdropClick = (event: React.MouseEvent) => {
    event.preventDefault();

    // Check that the detected click is exactly in the backdrop and not in any of its children.
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <main
      onClick={handleBackdropClick}
      className="fixed overflow-auto h-screen flex justify-center z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="my-auto">
        <div
          className={`w-[calc(100%-32px)] ${
            width ? width : "max-w-md"
          } m-4 p-4 h-[540px] text-text-primary bg-bg-primary rounded-2xl`}
        >
          {title != "" && (
            <>
              <header className="flex justify-between items-center px-4">
                <h3 className="text-xl sm:text-3xl text-center flex-grow">
                  {" "}
                  {title}{" "}
                </h3>
                <CloseIcon
                  onClick={() => onClose()}
                  className="cursor-pointer ml-1"
                  width={15}
                  height={15}
                />
              </header>
              <hr className="my-2 border-border-secondary" />
            </>
          )}
          <div className="max-h-96 overflow-auto mx-2 my-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
