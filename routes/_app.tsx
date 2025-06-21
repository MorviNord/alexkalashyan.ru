import type { PageProps } from "fresh";
import { schema } from "../utils/schema.ts";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="ru" class="bg-midnight">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="performance-hints" content="preload-images" />
        <meta
          name="author"
          content="Alexander Kalashyan | Web Development & Project Management"
        />
        <meta
          name="description"
          content="Alexander Kalashyan - IT Project Manager specializing in web development project management and support"
        />
        <meta
          property="og:title"
          content="Alexander Kalashyan | IT Project Manager"
        />
        <meta
          property="og:description"
          content="Web Development & Project Management Professional"
        />
        <meta
          name="keywords"
          content="project manager, web development, IT management, Alexander Kalashyan, project support"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <link
          rel="canonical"
          href={`https://alexkalashyan.ru${url.pathname}`}
        />
        <title>Alexander Kalashyan | IT Project Manager</title>
        <link rel="stylesheet" href="/styles.css" fetchPriority="high" />
      </head>
      <body class="grid min-h-screen grid-rows-[auto_1fr_auto] max-w-[680px] mx-auto px-4">
        <Component />
      </body>
    </html>
  );
}
