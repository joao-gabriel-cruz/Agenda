import { useState } from 'react';

function Contagem(props) {
  var start = props.datafinal;
  var [segundos, setSegudos] = useState();
  var [minutos, setMinuto] = useState();
  var [horas, setHora] = useState();
  var [dias, setDia] = useState();
  var [mes, setMes] = useState();

  function updateTimer() {
    var now = new Date();
    var distance = props.evento.data - now;
    if (props.evento.data >= now) {
      setDia(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHora(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinuto(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSegudos(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance <= 1000 && distance > 500) {
        alert('O evento ' + props.evento.nome + ' chegou');
        distance = 499;
      }
    }

    //   clearInterval(startTimer);
  }

  setTimeout(() => {
    updateTimer();
  }, 1000);

  return (
    <div className="flex h-[10rem] space-y-5  bg-sky-100 rounded-xl p-2 items-center ">
      <div className="flex flex-col  w-full">
        <div className="text-center space-y-10">
          <h2 className="text-2xl">{props.evento.nome}</h2>
          <div className="flex space-x-5 ">
            <p>dias: {dias} </p>
            <p>horas: {horas}</p>
            <p>minutos: {minutos}</p>
            <p>segundos: {segundos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contagem;
