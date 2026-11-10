import { auth } from "@clerk/nextjs/server";
import { appConfig } from "@/app.config";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Não autorizado" }, { status: 401 });
  }

  return Response.json({ features: appConfig.upcomingFeatures });
}
