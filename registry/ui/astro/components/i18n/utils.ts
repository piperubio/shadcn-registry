export function getLangFromUrl(url: URL): string {
  const [firstSegment] = url.pathname.split("/").filter(Boolean);
  return firstSegment ?? "es";
}

export function useTranslations(_lang: string): (key: string) => string {
  return (key: string) => key;
}
