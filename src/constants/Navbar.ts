import { NavbarModel } from "@/models/NavbarModel";

export const navbar: NavbarModel = {
  start: [
    { text: "Home", section: "#home" },
    { text: "Products", section: "#products" },
    { text: "Resources", section: "#resources" },
    { text: "Pricing", section: "#pricing" },
  ],
  end: [
    { text: "Log in", type: "secondary", redirectTo: "/login" },
    { text: "Sign up", type: "primary", redirectTo: "" },
  ],
};
