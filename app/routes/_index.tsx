import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello, World!</h1>
      <p>
        <a href="https://remix.run/docs/en/main">Remix</a> on <a href="https://cloud.google.com/run/docs">Cloud Run</a>
      </p>
    </div>
  );
}
