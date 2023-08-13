import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";

const schema = z.object({
  name: z.string().nonempty("Nome não pode ser vazio."),
  email: z.string().nonempty("E-mail não pode ser vazio.").email("Insira um e-mail válido."),
  password: z.string().nonempty("Senha não pode ser vazia.").min(8, "Digite no mínimo 8 caracteres."),
});

type formData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hoogFormSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hoogFormSubmit(async (data) => {
    const { accessToken } = await authService.signup(data);
    console.log(accessToken)
  });

  return { handleSubmit, register, errors };
}
