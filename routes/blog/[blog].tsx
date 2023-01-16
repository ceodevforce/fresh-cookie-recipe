
// import { PageProps } from "https://deno.land/x/fresh@1.1.2/server"
import { PageProps } from '$fresh/server.ts';

export default function BlogOne(props: PageProps) { 
    const { blog } = props.params;
    return (
        <main>
            <h1>Title: {blog}</h1>
            <h2>This is the preview section</h2>
            <p>This is a blog</p>
        </main>
    )
}
