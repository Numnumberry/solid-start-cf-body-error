import { APIEvent, readBody} from "@solidjs/start/server";

export const POST = async (event: APIEvent) => {
  const body = await readBody(event)

  return new Response(body)
}
