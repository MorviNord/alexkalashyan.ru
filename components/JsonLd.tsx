export function JsonLd({ data }: { data: unknown }) {
  const jsonString = JSON.stringify(data)
    .replace(/"/g, '"') // Убираем экранирование кавычек
    .replace(/</g, "\\u003c") // Защита от XSS
    .replace(/>/g, "\\u003e");

  return (
    <script type="application/ld+json">
      {/* @ts-ignore (игнорируем предупреждение Fresh/Preact) */}
      {jsonString}
    </script>
  );
}
