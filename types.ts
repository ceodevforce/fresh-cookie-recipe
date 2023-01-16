export type Props = {
    active: string;
}

export interface INutritionInformation {
    id: string;
    calories: string;
    fat: string;
    sodium: string;
    carbohydrates: string;
    fiber: string;
    sugar: string;
    protein: string;
}

export interface IIngredient {
    name: string;
    amount: string;
}

export interface IRecipe {
    id: string;
    name: string;
    category: string;
    prep_time: number;
    cook_time: number;
    yields: number;
    serving_size: number;
    nutrition_information: INutritionInformation;
    images?: string[];
    ingredients: IIngredient[];
    instructions: string[];
    notes: string;
}
