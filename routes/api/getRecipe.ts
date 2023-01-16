import { HandlerContext } from "$fresh/server.ts";
import type { IRecipe } from "../../types";

import db from "../../utils/database.ts"

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<HandlerContext> => {
    try {
        // Get all recipes
        const recipes: IRecipe[] = await db.select("recipes")

        return new Response.json(JSON.stringify(recipes))

    } catch (e) {
        return new Response.error(e)
    }
}
    
