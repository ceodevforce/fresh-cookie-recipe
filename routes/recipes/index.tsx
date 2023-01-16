import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout/Layout.tsx";
import type { IRecipe } from "../../types";

const recipes: IRecipe[] = [
  {
    "name": "Oatmeal Raisin Cookies",
    "category": "dessert",
    "prep_time": "15 minutes",
    "cook_time": "10-12 minutes",
    "yields": "24 cookies",
    "serving_size": "1 cookie",
    "nutrition_information": {
      "calories": "150",
      "fat": "7g",
      "sodium": "90mg",
      "carbohydrates": "20g",
      "fiber": "1g",
      "sugar": "10g",
      "protein": "2g",
        },
    "images": [
      "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    "ingredients": [
      { "name": "all-purpose flour", "amount": "1 cup" },
      { "name": "baking powder", "amount": "1 tsp" },
      { "name": "ground cinnamon", "amount": "1 tsp" },
      { "name": "salt", "amount": "1/2 tsp" },
      { "name": "butter", "amount": "1/2 cup" },
      { "name": "white sugar", "amount": "1/2 cup" },
      { "name": "brown sugar", "amount": "1/2 cup" },
      { "name": "egg", "amount": "1" },
      { "name": "vanilla extract", "amount": "1 tsp" },
      { "name": "rolled oats", "amount": "1 cup" },
      { "name": "raisins", "amount": "1/2 cup" },
    ],
    "instructions": [
      "Preheat oven to 350 degrees F (175 degrees C). Grease baking sheets.",
      "In a small bowl, combine flour, baking powder, cinnamon, and salt; set aside.",
      "In a large bowl, cream together butter, white sugar, and brown sugar until light and fluffy. Beat in egg and vanilla. Gradually stir in flour mixture. Stir in oats and raisins.",
      "Drop dough by rounded spoonfuls onto the prepared baking sheets.",
      "Bake for 10 to 12 minutes in the preheated oven, or until golden.",
    ],
    "notes":
      "You can add nuts or other dried fruits to this recipe, if desired.",
  },
  {
    "name": "Violent Night Cookies",
    "category": "dessert",
    "prep_time": "15 minutes",
    "cook_time": "10-12 minutes",
    "yields": "24 cookies",
    "serving_size": "1 cookie",
    "nutrition_information": {
      "calories": "150",
      "fat": "7g",
      "sodium": "90mg",
      "carbohydrates": "20g",
      "fiber": "1g",
      "sugar": "10g",
      "protein": "2g",
    },
    "images": [
      "https://images.unsplash.com/photo-1639678111962-88fffeb071cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    "ingredients": [
      { "name": "all-purpose flour", "amount": "1 cup" },
      { "name": "baking powder", "amount": "1 tsp" },
      { "name": "ground cinnamon", "amount": "1 tsp" },
      { "name": "salt", "amount": "1/2 tsp" },
      { "name": "butter", "amount": "1/2 cup" },
      { "name": "white sugar", "amount": "1/2 cup" },
      { "name": "brown sugar", "amount": "1/2 cup" },
      { "name": "egg", "amount": "1" },
      { "name": "vanilla extract", "amount": "1 tsp" },
      { "name": "rolled oats", "amount": "1 cup" },
      { "name": "raisins", "amount": "1/2 cup" },
    ],
    "instructions": [
      "Preheat oven to 350 degrees F (175 degrees C). Grease baking sheets.",
      "In a small bowl, combine flour, baking powder, cinnamon, and salt; set aside.",
      "In a large bowl, cream together butter, white sugar, and brown sugar until light and fluffy. Beat in egg and vanilla. Gradually stir in flour mixture. Stir in oats and raisins.",
      "Drop dough by rounded spoonfuls onto the prepared baking sheets.",
      "Bake for 10 to 12 minutes in the preheated oven, or until golden.",
    ],
    "notes":
      "You can add nuts or other dried fruits to this recipe, if desired.",
  },
  {
    "name": "Chocolate Chip Cookies",
    "category": "dessert",
    "prep_time": "15 minutes",
    "cook_time": "10-12 minutes",
    "yields": "24 cookies",
    "serving_size": "1 cookie",
    "nutrition_information": {
      "calories": "150",
      "fat": "7g",
      "sodium": "90mg",
      "carbohydrates": "20g",
      "fiber": "1g",
      "sugar": "10g",
      "protein": "2g",
    },
    "images": [
      "https://plus.unsplash.com/premium_photo-1672378335620-4ff096becbc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    "ingredients": [
      { "name": "all-purpose flour", "amount": "1 cup" },
      { "name": "baking powder", "amount": "1 tsp" },
      { "name": "ground cinnamon", "amount": "1 tsp" },
      { "name": "salt", "amount": "1/2 tsp" },
      { "name": "butter", "amount": "1/2 cup" },
      { "name": "white sugar", "amount": "1/2 cup" },
      { "name": "brown sugar", "amount": "1/2 cup" },
      { "name": "egg", "amount": "1" },
      { "name": "vanilla extract", "amount": "1 tsp" },
      { "name": "rolled oats", "amount": "1 cup" },
      { "name": "raisins", "amount": "1/2 cup" },
    ],
    "instructions": [
      "Preheat oven to 350 degrees F (175 degrees C). Grease baking sheets.",
      "In a small bowl, combine flour, baking powder, cinnamon, and salt; set aside.",
      "In a large bowl, cream together butter, white sugar, and brown sugar until light and fluffy. Beat in egg and vanilla. Gradually stir in flour mixture. Stir in oats and raisins.",
      "Drop dough by rounded spoonfuls onto the prepared baking sheets.",
      "Bake for 10 to 12 minutes in the preheated oven, or until golden.",
    ],
    "notes":
      "You can add nuts or other dried fruits to this recipe, if desired.",
  },
];

export const handler: Handlers<IRecipe | null> = {
  async GET(req, ctx) {
    if (!recipes) {
      return ctx.render(null);
    }
    const body = recipes;
    return ctx.render(body);
  },
};

export default function RecipePage({ data }: PageProps<IRecipe | null>) {
//   console.log("Data", data);
  if (!data) {
    return <h1 class="bg-red-600 text-white">No recipes found!</h1>;
  }

  return (
    <Layout>
      <main class="mt10">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3x1 text-center text-gray-600 font-semibold capitalize lg:text-4xl">
            Recipe Cookie Cards
          </h1>
          {data.map((recipe) => {
            return (
                <div class="mt-8 lg:mx-6 lg:flex lg:items-center">
                    <img src={ recipe.images[0] } class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"/>
                    <div class="mt-6 ">
                        <p class="text-sm text-blue-500 uppercase">{recipe.category}</p>
                        <a href={`/recipes/${recipe.name}`}>
                            {recipe.name}
                        </a>
                        <p class="mt-3 text-sm text-gray-400">
                            {recipe.instructions[0]}
                        </p>
                        <a href={recipe.name} class="inline-block mt-2 text-blue-400 underline hover:text-gray-800">Read More</a>
                    </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
