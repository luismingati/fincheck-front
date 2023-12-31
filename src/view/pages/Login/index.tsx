import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span><Link to="/register" className="tracking-[-0.5px] text-teal-900 font-bold">Crie uma conta</Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input  type="email" placeholder="E-mail" error={errors.email?.message} {...register('email')} />
        <Input  type="password" placeholder="Senha" error={errors.password?.message} {...register('password')}/>
        <Button type="submit" className="mt-2">Entrar</Button>
      </form>
    </>
  )
}
