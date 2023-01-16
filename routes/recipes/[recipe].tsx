import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout/Layout.tsx";
import { Handler } from "$fresh/server.ts";
import {handler} from "./index.tsx"
import { IRecipe } from "../../types.ts";


const data = handler

export default function RecipePage(props: PageProps<IRecipe | null>) {
    const { data } = props;
    console.log("data", props);
    const { recipe } = props.params;
  return (
    <Layout>
      <main class="mt-11">
        <h1>Recipe: {recipe}</h1>
      </main>
    </Layout>
  );
}
