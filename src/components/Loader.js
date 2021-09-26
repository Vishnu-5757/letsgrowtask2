import {Loader as ReactLoader} from "react-loader-spinner";
// import './styles.css';

const Loader = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <ReactLoader
            type="TailSpin"
            color="#ED8E7C"
            style={{ marginLeft: '270px' }}
            height={50}
            width={50}
            timeout={3000}
            />
       </div>
    );
}
export default Loader