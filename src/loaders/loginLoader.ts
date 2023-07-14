export function loginLoader({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams.get("msg");
  return searchParams;
}
