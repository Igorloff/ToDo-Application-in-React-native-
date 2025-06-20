import LinkBtn from '../layout/LinkBtn';

function Home() {
  return (
    <div>
      <h1>
        Bem vindo ao <span>ToDo</span>
      </h1>
      <p>Comece a se organizar agora mesmo !</p>
      <LinkBtn to="/NewProject" children="Criar tarefa" />
    </div>
  );
}

export default Home;
