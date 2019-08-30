import { useState } from 'react';

const Boton = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p className={toggle ? 'red' : 'blue'}>Hello Next.js</p>
      <button onClick={()=> setToggle(!toggle)}>Change Color</button>
      <style jsx>{`
        .blue {
          color: white;
        }
        .red {
          color: red;
        }
      `}</style>
    </div>
  );
};
export default Boton;