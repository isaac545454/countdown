import { useState } from "react";
import Counter from "./components/Counter";
import Title from "./components/Title";
import useCounte from "./hooks/useCoute";

function App() {
  const [day, hour, minute, second] = useCounte("Jan 1, 2023 00:00:00");

  return (
    <div
      className="h-[100vh] bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(https://img.olhardigital.com.br/uploads/acervo_imagens/2019/12/r16x9/20191231124635_1200_675_-_ano_novo.jpg)`,
      }}
    >
      <div className="w-[50%] min-h-[300px] bg-zinc-50 opacity-80 p-8 rounded-2xl">
        <Title title="Contagem Regressiva para 2023" />
        <div className="flex justify-center items-center h-[200px] gap-8">
          <Counter number={day} title="dias" />
          <Counter number={hour} title="horas" />
          <Counter number={minute} title="minutos" />
          <Counter number={second} title="segundos" />
        </div>
      </div>
    </div>
  );
}

export default App;
