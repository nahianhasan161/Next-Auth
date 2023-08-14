import { email, minLength, object, string } from "valibot";

export const RegisterSchema =
    object({
        name: string([minLength(3,'Length must be greater than 3')]),
        email: string([email(),minLength(5,'Length must be greater than 5')]),
        password: string([minLength(8,'Length must be greater than 8')]),
      });
