//import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server";

import { Handlers, PageProps } from "$fresh/server.ts";

interface IUser {
    login: string;
    name: string;
    avatar_url: string;
}

export const handler: Handlers<IUser | null> = {
    async GET(_, ctx) {
        const { username } = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.status === 404) {
            return ctx.render(null)
        }
        const user: IUser = await resp.json();
        return ctx.render(user)
    }
}

export default function Page({ data }: PageProps<IUser | null>) {
        console.log(data) 

    if (!data) {
        return <h1>User Not Found</h1>
    }
    return (
        <div class="flex mt-5 mx-auto">
            <img src={data.avatar_url} width={64} height={64} />
            <h1>{data.name}</h1>
            <p>{data.login}</p>
        </div>
    )
}