import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html class="bg-midnight">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="author"
          content="Alexander Kalashyan | Web Development & Project Management"
        />
        <meta
          name="description"
          content="I manage development and support IT projects"
        />
        <title>example</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="grid min-h-screen grid-rows-[auto_1fr_auto] max-w-[680px] mx-auto px-4">
        <Component />
      </body>
    </html>
  );
}
