import zod from "zod";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

export const createUserSchema = zod.object({
  email: emailSchema,
  password: passwordSchema,
});
