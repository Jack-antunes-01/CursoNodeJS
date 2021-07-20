import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token

  const authToken = request.headers.authorization;

  // Validar se o token está preenchido

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  // Validar se o token é válido

  try {
    // Recuperar informações do usuário
    const { sub } = verify(
      token,
      "03fb4adfc72fa6df5f6d1f2a20fb95f7"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
