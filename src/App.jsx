import { useState } from 'react';
import './App.css';
import Contagem from './components/contagem';

function App() {
  var [evento, setEvento] = useState([]);

  var dataModelo = '12-31-9999';
  console.log(new Date(dataModelo));

  function definirData(event) {
    event.preventDefault();

    var data = event.target.dataEvento.value;
    var hora = event.target.timeFinal.value;

    data = data + ' ' + hora;

    function validarEvento() {
      const presente = Date.now();
      const futuro = new Date(data);

      console.log('futuro ' + new Date(data));
      console.log('presente ' + presente);

      if (futuro < presente) {
        alert('Não é possivel agendar uma data no passado');
        throw new Error('Não é possivel agendar uma data no passado');
      }
      if (futuro > new Date(dataModelo)) {
        throw new Error('data invalida');
      }
    }
    validarEvento();

    event.target.dataEvento.value = '';
    event.target.timeFinal.value = '';

    var nome = event.target.evento.value;

    setEvento([...evento, { nome: nome, data: new Date(data) }]);
    event.target.evento.value = '';
  }

  return (
    <div className="w-full min-h-full bg-[#cda0fa]  flex justify-evenly ">
      {evento.length > 0 ? (
        <div key={evento.nome} className="flex w-3/12 h-screen flex-col">
          {evento.map((item) => (
            <Contagem evento={item} />
          ))}
        </div>
      ) : (
        <div></div>
      )}

      <div className=" mt-[22rem] h-screen  justify-center ">
        <form
          onSubmit={definirData}
          className="flex h-[15rem] bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 fixed space-y-5 bg-sky-100 rounded-xl p-2 "
        >
          <div className="flex flex-col w-full h-full justify-center space-y-6">
            <div className="flex justify-center space-x-2">
              <div className="flex flex-col">
                <label
                  className="text-center text-purple-100 text-2xl "
                  htmlFor=""
                >
                  informe o evento
                </label>
                <input
                  id="evento"
                  type="text"
                  placeholder="eventos"
                  className="rounded-xl pl-2   my-[2rem]"
                  required
                />
              </div>
              <div className="text-center space-x-2 flex">
                <div className="flex flex-col w-[10rem] space-y-2 ">
                  <label className="text-2xl text-purple-100" htmlFor="">
                    Data Final
                  </label>
                  <input
                    id="timeFinal"
                    type="time"
                    className="rounded-xl pl-2  "
                  />
                  <input
                    id="dataEvento"
                    type="date"
                    className="rounded-xl pl-3"
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex ml-24">
              <button
                className="bg-[#450380] border-[#0a004a] border-solid border-2 w-[10rem] h-[3rem] ease-in duration-300 rounded-xl text-white hover:bg-[#8310e8] "
                type="submit"
              >
                iniciar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
