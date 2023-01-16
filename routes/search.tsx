import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Bob", "John", "Mike", "Harry", "Jill"];

interface IData {
    results: string[];
    query: string;
}

export const handler: Handlers<IData> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || "";
        const results = NAMES.filter(name => name.includes(query))
        return ctx.render({results, query});
    }
}

export default function Page({ data }: PageProps<IData>) {
    const { results, query } = data;
    return (
        <div>
            <form>
                <input type="text" name="q" value={query} />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    )
}