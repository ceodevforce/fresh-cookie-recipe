import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Head } from "$fresh/runtime.ts";
import MainHeader from "../MainNavbar.tsx";

type Props = {
  children: JSX.Element;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <div>
        <MainHeader />
      </div>
      <main>
        {children}
      </main>
    </>
  );
}
