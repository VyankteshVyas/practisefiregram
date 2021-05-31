import { useEffect, useState } from 'react';
import {storage} from '../firebase/config';

function useStorage(file){

    const [progress,setProgress]=useState(null);
    const [err,setErr]=useState(null);
    const [url,setUrl]=useState(null);

    {useEffect(function (){
        var storageRef=storage.ref(file.name);
        storageRef.put(file).on('state_changed',function (snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },function (err){
            setErr(err);
        }, async function (){
            let currurl=await storageRef.getDownloadURL();
            setUrl(currurl);
        })
    },[file])}

    return {progress,url,err};
}

export default useStorage;
