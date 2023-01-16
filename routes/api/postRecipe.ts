// import { HandlerContext } from "$fresh/server.ts";

// import type { IRecipe } from "../../types";

// // import uuid module from deno
// import { v4 } from "https://deno.land/std/uuid/mod.ts";

// import db from "../../utils/database.ts"

// export async function handler(_req: Request, _ctx: HandlerContext): Promise<void> {
//     // const url = new URL(_req.url);

//     // const name = url.searchParams.get("name") || "";

//     const { name, description, category, prep_time, cook_time, yields, serving_size, nutrition_information, images, ingredients, instructions, notes } = _req.body
    
//     const recipes: IRecipe = {
//         name,
//         description,
//         category,
//         prep_time,
//         cook_time,
//         yields,
//         serving_size,
//         nutrition_information,
//         images,
//         ingredients,
//         instructions,
//         notes,
//     }

//     try {
//         // Generate uuid
//         const uuid = await v4.generate()

//         /* -------------------------------------------------------------------------- */
//         /*                               Create new data                              */
//         /* -------------------------------------------------------------------------- */

//         const created = await db.create("recipes", {
//             uuid: uuid,
//             name: name,
//             description: description,
//             category: category,
//             prep_time: prep_time,
//             cook_time: cook_time,
//             yields: yields,
//             serving_size: serving_size,
//             nutrition_information: nutrition_information,
//             images: images,
//             ingredients: ingredients,
//             instructions: instructions,
//             notes: notes,
//         })

//         // Return Data 
//         return Response.json({
//             successful: "Data added successfully",
//             created
//         })
//     } catch (e) {
//         return new Response(e)
//     }
// }