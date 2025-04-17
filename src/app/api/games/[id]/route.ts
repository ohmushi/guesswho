import { notFound } from "next/navigation";
import { games } from "../games";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return new Response(`Game '${id}' not found.`, { status: 404 });

  return Response.json(game);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return new Response(`Game '${id}' not found.`, { status: 404 });

  const res = await request.json();
  console.log(res);

  return Response.json(game);
}
