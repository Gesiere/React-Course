import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer);

  }


  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus()
  })
  console.log(refContainer);
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="">
          <input type="text" ref={refContainer}/>
          <button type="submit">submit</button>
        </div></form>
      <div className="" ref={divContainer}></div>
    </>
    
  )
}
export default UseRefBasics;
