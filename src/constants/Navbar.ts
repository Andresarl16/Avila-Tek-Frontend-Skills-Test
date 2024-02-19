import { NavbarModel } from "@/models/NavbarModel";

export const navbar: NavbarModel = {
  start: [
    { text: "Home", section: "" },
    { text: "Products", section: "" },
    { text: "Resources", section: "" },
    { text: "Pricing", section: "#pricing" },
  ],
  end: [
    { text: "Log in", type: "secondary", redirectTo: "" },
    { text: "Sign up", type: "primary", redirectTo: "" },
  ],
};
