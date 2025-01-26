import TextFormatter from "../../components/TextFormatter";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <TextFormatter content={'# 404 Not Fount'} />
      <TextFormatter content="## Não há nada por aqui"/>
    </div>
  );
}