import { footer } from "@/constants/Footer";
import LogoIcon from "@/ui/icons/LogoIcon";
import Button from "../general/Button";
import NewBadge from "../badges/NewBadge";

export default function Footer({
  openModal,
}: {
  openModal: (title: string, text: string) => void;
}) {
  return (
    <footer className="grid sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 mt-12 sm:mt-16 mb-12 px-4 sm:px-0">
      <div className="flex flex-col-reverse sm:flex-row justify-between col-span-12">
        <ul className="flex space-x-8">
          {footer.linkColumns.map((column) => (
            <li key={column.name}>
              <p className="text-sm text-text-primary font-semibold pb-4 ">
                {" "}
                {column.name}{" "}
              </p>
              <ul className="space-y-3">
                {column.footerLinks.map((links) => (
                  <li key={links.text} className="flex space-x-2">
                    <Button
                      text={links.text}
                      type={links.type}
                      actionType={"function"}
                      onClick={() => openModal(links.text, links.description)}
                      className="pt-0 pr-0 pb-0 pl-0"
                    />
                    {links.new ? <NewBadge></NewBadge> : <></>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="space-y-4 mb-12 sm:mb-0">
          <p className="text-sm text-text-primary font-semibold">
            {" "}
            {footer.downloadBadges.name}{" "}
          </p>
          <ul className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 space-y-0 sm:space-y-4">
            {footer.downloadBadges.badges.map((badge) => (
              <li key={badge.redirectTo} className="cursor-pointer">
                <a href={badge.redirectTo} target="_blank">
                  <badge.svg width={135} height={40} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="col-span-12 mt-12 sm:mt-16 mb-8 border-border-secondary" />
      <div className="flex flex-col sm:flex-row justify-between col-span-12">
        <LogoIcon width={145} height={38}></LogoIcon>
        <p className="text-text-quaternary mt-6 sm:mt-0">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
