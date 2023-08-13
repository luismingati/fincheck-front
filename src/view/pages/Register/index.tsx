import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { handleSubmit, register, errors } = useRegisterController();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-1px]">Crie sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span><Link to="/login" className="tracking-[-0.5px] text-teal-900 font-bold">Fazer login</Link>
        </p>
      </header>

      <form action="" onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input type="text" error={errors.name?.message} placeholder="Nome" {...register("name")} />
        <Input type="email" error={errors.email?.message} placeholder="E-mail" {...register("email")} />
        <Input type="password" error={errors.password?.message} placeholder="Senha" {...register("password")}/>
        <Button type="submit" className="mt-2">Criar conta</Button>
      </form>
    </>
  )
}
