import { Api } from "sst/node/api";

export async function GET() {
  const response = await fetch(Api.api.url);
  const data = await response.json();
  return Response.json(data);
}
