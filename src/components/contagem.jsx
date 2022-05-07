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
  }

  setTimeout(() => {
    updateTimer();
  }, 1000);

  return (
    <div className="flex flex-row my-[2rem] w-[24rem] h-[10rem] bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500 ">
      <div className="flex flex-col w-full">
        <div className="text-center space-y-10">
          <h2 className="text-2xl text-purple-300">{props.evento.nome}</h2>
          <div className="flex space-x-5 text-purple-100">
            <p>Dias {dias <= 9 ? '0' + dias : dias} </p>
            <p>Horas {horas <= 9 ? '0' + horas : horas}</p>
            <p>Minutos {minutos <= 9 ? '0' + minutos : minutos}</p>
            <p>Segundos {segundos <= 9 ? '0' + segundos : segundos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contagem;
