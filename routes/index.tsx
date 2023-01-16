import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Layout from "../components/Layout/Layout.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Fresh Cards</title>
      </Head>
      <Hero />
      <div class="bg-white">
      <div class="xl:max-w-7x1 md:mx-auto md:px-10">
        <div class="flex items-start pb-3.5 px-5 md:pb-10">
          <div class="relative mt-4 w-20 h-20 mr-5 md:w-16 md:h-20 md:mt-6">
          </div>
          <div class="mt-4 md:flex md:grow md:justify-between md:items-center">
            <div>
              <small
                class="text-xs py-1.5 px-2.5 bg-black text-white font-semibold inline-block mb-1.5 md:mt-6 uppercase"
              >
                Join the family
              </small>
              <h2 class="font-bold text-base md:text-xl">
                Apply to Work at a Cookie Recipe Near You
              </h2>
            </div>
            <a class="flex items-center rounded-xl mt-5 py-2 px-6" href="#"
              ><span class="mr-2 text-sm font-medium md:text-lg"
                >Apply Today</span
              ></a
            >
          </div>
        </div>
      </div>
      </div>
      <div class="bg-black px-10 py-24 mx-auto max-w-7xl tails-selected-element">
        <div class="w-full mx-auto text-left md:text-center">
          <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-500 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> The
            <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Best Cookies</span> for
            <br class="lg:block hidden" /> all your scrumptous needs.
          </h1>
            <p class="px-0 mb-6 text-lg text-white md:text-xl lg:px-24"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        </div>
        </div>

    </Layout>
  );
}
