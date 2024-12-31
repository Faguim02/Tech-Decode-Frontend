import LeftNavigation from "../../components/LeftNavigation";

export default function DashBoardPage() {
  return (
    <div style={{backgroundColor: "#ECEBE4"}} className="h-screen flex p-8">
      <LeftNavigation/>
      <article className="flex flex-col p-4 mx-16 gap-10">
        <section>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <label className="text-slate-600">Desenpenho do seu blog</label>
        </section>

        <section className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center gap-2">
                <h3 className="text-lg">Visitas</h3>
                <span className="font-bold">40</span>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center gap-2">
                <h3 className="text-lg">Postagens</h3>
                <span className="font-bold">6</span>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center gap-2">
                <h3 className="text-lg">Usuarios</h3>
                <span className="font-bold">5</span>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center gap-2">
                <h3 className="text-lg">Comentarios</h3>
                <span className="font-bold">16</span>
            </div>

        </section>

      </article>
    </div>
  );
}