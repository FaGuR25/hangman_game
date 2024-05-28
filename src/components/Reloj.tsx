import { useEffect, useState } from 'react';

interface Props{
  start: boolean;
  timeCalback:(time: string) => void;
}


function Reloj ({ start, timeCalback }: Props): React.JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(start){
    const key = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      timeCalback(`${count}s`);
    }, 1000);

    return () => {
      clearInterval(key);
    };

    }else{
        setCount(0);
        timeCalback(`${(count / 60).toFixed(0)} min`);
    };
  }, [start]);
 
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <>
      <div className='reloj'>
        <p>Cronometro {minutes}:{seconds}</p>
      </div>
    </>
  );
}

export default Reloj;
