import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {
  active: string;
};

export default function MainHeader({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Recipe", href: "/recipes" },
    { name: "Ingredients", href: "/ingredients" },
  ];

  const isOpen = false;
  return (
    <nav class="bg-white shadow-lg w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="container flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          Fresh Cards
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
