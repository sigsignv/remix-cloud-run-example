import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { PropsWithChildren } from "react";

function Document({
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div style={{textAlign: "center"}} >
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document>
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </Document>
    );
  } else {
    return (
      <Document>
        <h1>Unknown Error</h1>
      </Document>
    );
  }
}
