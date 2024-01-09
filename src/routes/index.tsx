import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>GB Whatsapp</Title>
      <h1>GB Whatsapp!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://gbwhatsapp.mom" target="_blank">
          gbwhatsapp
          
        </a>{" "}
      </p>
    </main>
  );
}
