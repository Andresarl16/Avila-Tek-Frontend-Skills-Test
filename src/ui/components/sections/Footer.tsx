import StarIcon from "@/ui/icons/StarIcon";
import Button from "../Button";
import Image from "next/image";
import { footer } from "@/constants/Footer";
import NewBadge from "../badges/NewBadge";
import LogoIcon from "@/ui/icons/LogoIcon";

export default function Footer() {
  return (
    <footer className="grid sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 mt-16 mb-12">
      <div className="flex flex-row justify-between col-span-12">
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
                      redirectTo={links.redirectTo}
                      styles="pt-0 pr-0 pb-0 pl-0"
                    />
                    {links.new ? <NewBadge></NewBadge> : <></>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="space-y-4">
          <p className="text-sm text-text-primary font-semibold">
            {" "}
            {footer.downloadBadges.name}{" "}
          </p>
          {footer.downloadBadges.badges.map((badge) => (
            <li key={badge.redirectTo} className="cursor-pointer">
              <a href={badge.redirectTo} target="_blank">
                <badge.svg width={135} height={40} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="col-span-12 mt-16 mb-8 border-border-secondary" />
      <div className="flex justify-between col-span-12">
        <LogoIcon width={145} height={38}></LogoIcon>
        <p className="text-text-quaternary">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
