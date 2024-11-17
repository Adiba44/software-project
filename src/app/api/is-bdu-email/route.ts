export const dynamic = 'force-dynamic';
import { nextResponseJson, requestJson } from "@/app/api/utils/request-response";

export async function POST(request: any) {
    const { email } = await requestJson(request);
    return nextResponseJson({ status: 200, isBduEmail: true })
};