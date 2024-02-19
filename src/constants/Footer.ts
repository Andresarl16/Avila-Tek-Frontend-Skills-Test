import { FooterModel } from "@/models/FooterModel";
import AppStoreIcon from "@/ui/icons/AppStoreIcon";
import GooglePlayIcon from "@/ui/icons/GooglePlayIcon";

export const footer: FooterModel = {
  linkColumns: [
    {
      name: "Product",
      footerLinks: [
        { text: "Overview", type: "tertiary", redirectTo: "", new: false },
        { text: "Features", type: "tertiary", redirectTo: "", new: false },
        { text: "Solutions", type: "tertiary", redirectTo: "", new: true },
        { text: "Tutorials", type: "tertiary", redirectTo: "", new: false },
        { text: "Pricing", type: "tertiary", redirectTo: "", new: false },
        { text: "Releases", type: "tertiary", redirectTo: "", new: false },
      ],
    },
    {
      name: "Company",
      footerLinks: [
        { text: "About us", type: "tertiary", redirectTo: "", new: false },
        { text: "Careers", type: "tertiary", redirectTo: "", new: false },
        { text: "Press", type: "tertiary", redirectTo: "", new: false },
        { text: "News", type: "tertiary", redirectTo: "", new: false },
        { text: "Media kit", type: "tertiary", redirectTo: "", new: false },
        { text: "Contact", type: "tertiary", redirectTo: "", new: false },
      ],
    },
  ],
  downloadBadges: {
    name: "Get the app",
    badges: [
      { svg: AppStoreIcon, redirectTo: "https://www.apple.com/app-store/" },
      {
        svg: GooglePlayIcon,
        redirectTo: "https://play.google.com/store/games?hl=en&gl=US&pli=1",
      },
    ],
  },
};
