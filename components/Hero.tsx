import { JSX } from "preact/jsx-runtime";

export default function Hero(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div class="home">
      <div class="bg-black">
       
        <img
          src="https://images.unsplash.com/photo-1637527843617-faa69ecf4a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2265&q=80"
        />
      </div>
    </div>
    )
}