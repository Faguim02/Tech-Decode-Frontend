import preview from '../../assets/preview.svg';

export default function SignInPage() {
  return (
    <div>
      
      <figure>
        <img src={preview} alt="Preview" />
      </figure>

      <form >
        <h1>Acessar conta</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="">não tem uma conta ainda? click aqui</a>
      </form>
      
    </div>
  );
}