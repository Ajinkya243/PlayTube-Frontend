import { useGlobalState } from '../../utils/context/GlobalStateProvider';
import classes from './MobileSearchbar.module.css'
const MobileSearchbar=()=>{
    const{setInput}=useGlobalState();
    return(
        <>
        <input type="text" placeholder="Search" className={classes.mobilebar} onChange={event=>setInput(event.target.value)}/>
        </>
    )
}
export default MobileSearchbar;