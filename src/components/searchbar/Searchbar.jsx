import classes from './Searchbar.module.css'
const Searchbar=()=>{
    return (
        <input className={classes.input} type="text" placeholder='Search' />
    )
}
export default Searchbar;