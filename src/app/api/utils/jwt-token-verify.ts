import { verify } from "jsonwebtoken";
export const jwtTokenVerify = (request: any) => {
    try {
        if (request.cookies.get(process.env.TOKEN_NAME)) {
            const tokenValue = request.cookies.get(process.env.TOKEN_NAME)?.value;
            let data: any = verify(tokenValue, process.env.JWT_KEY!);
            return data;
        } return undefined;
    } catch (error) {
        return undefined;
    }
}