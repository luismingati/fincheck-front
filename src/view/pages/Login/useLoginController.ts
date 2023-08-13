import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { httpCLient } from "../../../app/services/httpClient";

const schema = z.object({
  email: z.string().nonempty("E-mail não pode ser vazio.").email("Insira um e-mail válido."),
  password: z.string().nonempty("Senha não pode ser vazia.").min(8, "Digite no mínimo 8 caracteres."),
});

type formData = z.infer<typeof schema>;

export function useLoginController(){
  const { handleSubmit: hookFormHandleSubmit, register, formState: { errors } } = useForm<formData>({ resolver: zodResolver(schema) });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpCLient.post('/auth/signin', data)
  });

  return {handleSubmit, register, errors};
}
