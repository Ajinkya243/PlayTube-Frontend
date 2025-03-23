import { useGlobalState } from '../../utils/context/GlobalStateProvider';
import classes from './Searchbar.module.css'
const Searchbar=()=>{
    const {setInput,input}=useGlobalState();
    return (
        <>
        <input className={classes.input} type="text" placeholder='Search' onChange={event=>setInput(event.target.value)} value={input}/>
        {input?<button className={classes.clear} onClick={()=>setInput('')}>Clear</button>:''}
        </>
    )
}
export default Searchbar;