import zod from "zod";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

export const createUserSchema = zod.object({
  email: emailSchema,
  password: passwordSchema,
});

export const updateUserSchema = zod.object({
  password: passwordSchema,
  name: zod.object({
    first: zod.string(),
    last: zod.string(),
  }),
  age: zod.number(),
  eyeColor: zod.string(),
  phone: zod.string(),
  address: zod.string(),
  company: zod.string(),
  picture: zod.string(),
  guid: zod.string(),
});

export const patchUserSchema = createUserSchema.partial();

export const idScheme = zod
  .string()
  .length(24)
  .regex(/^[0-9a-fA-F]{24}$/);
