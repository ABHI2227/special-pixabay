import React , {useContext} from 'react'
import PixabayContext from '../context/PixabayContext';

const Navbar = () => {
    const { fetchImagesByCategory, setQuery } = useContext(PixabayContext);
    return (
        <>
            

            <div className="container my-3 d-flex justify-content-center align-items-center">
                <button onClick={()=>fetchImagesByCategory('Nature')} type="button" className="btn btn-outline-primary mx-3">Nature</button>
                <button onClick={()=>fetchImagesByCategory('Computer')} type="button" className="btn btn-outline-secondary mx-3">Computer</button>
                <button onClick={()=>fetchImagesByCategory('Building')} type="button" className="btn btn-outline-success mx-3">Building</button>
                <button onClick={()=>fetchImagesByCategory('Sport')} type="button" className="btn btn-outline-danger mx-3">Sport</button>
                <button onClick={()=>fetchImagesByCategory('Transportation')} type="button" className="btn btn-outline-warning mx-3">Transportation </button>
                <button onClick={()=>fetchImagesByCategory('Travel')} type="button" className="btn btn-outline-info mx-3">Travel</button>
                <button onClick={()=>fetchImagesByCategory('Food')} type="button" className="btn btn-outline-success mx-3">Food</button>
                <button onClick={()=>fetchImagesByCategory('Drink')} type="button" className="btn btn-outline-light mx-3">Drink</button>
            </div>

           <div className='container'>
            <input className="form-control mx-3 my-3" 
            type="text" onChange={(e)=>setQuery(e.target.value)} placeholder="Search"
             aria-label="Search">

             </input>

           </div>
        </>
    )
}

export default Navbar;  