import jwt from "jsonwebtoken";

const JWT_SECRET = "THIS_SHOULD_BE_A_SECRET";

class JSONWebToken {
  static sign(payload: any) {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1h",
    });
  }

  static verify(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }

  static decode(token: string) {
    return jwt.decode(token);
  }
}

export default JSONWebToken;
