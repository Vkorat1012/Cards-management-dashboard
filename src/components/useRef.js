import React,{useState, useRef} from 'react'

export const UseRef = () => {

    const txt = useRef(null)
    const [show, setShow]=useState(false);

    const prevent = (e)=>{
e.preventDefault();
console.log("Works")

    }
  return (
    <form onSubmit={prevent}>
    <div className='my-5'>
        <label htmlFor='txtBox'>This is useref Demo</label>
        <br />
        <input id= "txt" ref={txt}></input>
        <br />
        <button type='submit'>Submit</button>
    </div>
  { show &&  <div>{txt.current.value}</div>}
    </form>
  )
}
