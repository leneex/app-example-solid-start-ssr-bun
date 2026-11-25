import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <>
      <Title>Page not found — SolidStart SSR</Title>
      <HttpStatusCode code={404} />
      <h1>Page not found</h1>
      <p>
        This page does not exist. Go to the <a href="/">home page</a>.
      </p>
    </>
  );
}
