import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {

    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const {progress,url,err}=useStorage(file);

    const types=['image/jpeg','image/png'];

    function changeHandler(eventObj){
        let selected=eventObj.target.files[0];
    
        if(selected&&types.includes(selected.type)){
            setFile(selected);

            setError(null);
        }else{
            setFile(null);
            setError("Please select a valid file type");
        }
    }

    return ( 
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error&&<div className="error">{error}</div>}
                {file&&<div>{file.name}</div>}

            </div>
        </form>
     );
}
 
export default UploadForm;