import { useEffect, useState } from 'react';


function Reloj ({ start }: {start: boolean}): React.JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(start){
    const key = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };

    }else{
        setCount(0);
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
