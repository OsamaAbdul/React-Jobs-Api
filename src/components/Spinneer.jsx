import ClipLoader from 'react-spinners/ClipLoader';

function Spinneer({ loading }){
     const override = {
        display: 'block',
        margin: "100px auto"
     }
    return (  
        <ClipLoader 
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
        />
    )
}
export default Spinneer;