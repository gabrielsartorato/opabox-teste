import { useCallback, useState } from 'react';
import './app.css';
import api from './service/api';

function App() {
  const [classN, setClassN] = useState();
  const [classS, setClassS] = useState();
  const [breakA, setBreakA] = useState();
  const [breakB, setBreakB] = useState();
  const [classNresponse, setClassNresponse] = useState();
  const [classSresponse, setClassSresponse] = useState();
  const [interlace, setInterlace] = useState();

  const handleSubmitClasses = useCallback(async () => {
    try {
      const data = {
        listas: {
          salaN: classN,
          salaS: classS,
        },
      };

      if (!classS || !classN) {
        alert('Deve ser preenchido ambas as classes');
        return;
      }

      const response = await api.post('/ordenaLista', data);

      setClassNresponse(response.data.salaN);
      setClassSresponse(response.data.salaS);
    } catch (err) {
      console.log(err);
    }
  }, [classN, classS]);

  const handleSubmitInterlace = useCallback(async () => {
    try {
      console.log('aqui 1');
      if (!breakA || !breakB) {
        console.log('aqui 2');
        alert('Devem ser preenchidas ambos os intervalos');
        return;
      }

      console.log('aqui 3');
      const response = await api.get('/interlace', {
        params: {
          intervaloA: breakA,
          intervaloB: breakB,
        },
      });

      setInterlace(response.data.resp);
    } catch (err) {
      console.log(err);
    }
  }, [breakA, breakB]);

  return (
    <div className="container">
      <nav className="menu-items">
        <div className="input-class">
          <input
            onChange={(e) => setClassN(e.target.value)}
            type="text"
            placeholder="Sala N - Digite os números separados por vírgula"
          />
          <input
            onChange={(e) => setClassS(e.target.value)}
            type="text"
            placeholder="Sala S - Digite às letras separadas por vírgula"
          />
          <button onClick={handleSubmitClasses}>Enviar</button>
        </div>

        <div className="input-interlace">
          <input
            onChange={(e) => setBreakA(e.target.value)}
            type="text"
            placeholder="Intervalo A - Digite os intervalos separados por vírgula"
          />
          <input
            onChange={(e) => setBreakB(e.target.value)}
            type="text"
            placeholder="Intervalo B - Digite os intervalos separados por vírgula"
          />
          <button onClick={handleSubmitInterlace}>Enviar</button>
        </div>
      </nav>
      <div className="container-response">
        <div className="container-classes">
          <h1 className="header-classes">Lista de Classe Ordenada</h1>
          <p className="class-list-n">
            Sala N:{' '}
            {classNresponse
              ? classNresponse.map((classes, index) => {
                  return index + 1 !== classNresponse.length
                    ? classes + ', '
                    : classes;
                })
              : ''}
          </p>
          <p className="class-list-s">
            Sala s:{' '}
            {classSresponse
              ? classSresponse.map((classes, index) => {
                  return index + 1 !== classSresponse.length
                    ? classes + ', '
                    : classes;
                })
              : ''}
          </p>
        </div>
        <div className="break-response">
          <h1>Intervalos</h1>
          <p>Os intervalos se interlaçam: {interlace}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
