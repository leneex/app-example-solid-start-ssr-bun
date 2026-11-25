import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <Title>About — SolidStart SSR</Title>
      <h1>About</h1>
      <p>
        A basic{" "}
        <a href="https://start.solidjs.com" target="_blank" rel="noopener noreferrer">
          SolidStart
        </a>{" "}
        app with server-side rendering. The server is built by Nitro with the <code>node-server</code> preset, and routes
        in the <code>src/routes/</code> folder are picked up automatically.
      </p>
    </>
  );
}
