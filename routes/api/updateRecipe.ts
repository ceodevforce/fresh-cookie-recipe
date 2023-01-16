// import { HandlerContext } from "$fresh/server.ts";

// import type { IRecipe } from "../../types";

// import db from "../../utils/database.ts";

// export async function handler(_req: Request, _ctx: HandlerContext) {
//     console.log("Context", _ctx)

//     const { name, description, category, prep_time, cook_time, yields, serving_size, nutrition_information, images, ingredients, instructions, notes } = _req.body

//     const selectedRecipe: IRecipe = await db.select('recipes').where(name)
    
//     try { 
//         const updatedRecipe: IRecipe = await db.update(selectedRecipe, {
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

//         return Response.json({
//             updated: "Recipe updated",
//             updatedRecipe,
//         })
//     } catch (e) {   
//         return new Response(e)
//     }
// }