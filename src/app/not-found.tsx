import Button from "@/ui/components/Button";
import Input from "@/ui/components/Input";
import RightArrowIcon from "@/ui/icons/RightArrowIcon";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-full h-screen min-h-[252px] py-4 justify-center items-center">
      <section className="w-full max-w-sm p-8 mx-4 md:mx-0 bg-bg-secondary rounded-2xl">
        <h2 className="text-5xl text-center font-semibold">404</h2>
        <p className="text-lg my-4 text-center">Page not found</p>

        <Button
          text="Go Home"
          type="primary"
          redirectTo="/"
          className="h-fit w-full"
        ></Button>
      </section>
    </main>
  );
}
