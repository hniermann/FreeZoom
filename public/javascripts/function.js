async function getStream(v){
    let s = null;
    try{
        s = await navigator.mediaDevices.getUserMedia({audio : true, video : true});
    }
    catch{
        Console.log("fucked");
    }
    v.srcObject = s;
}
const vid = document.getElementById('video');
getStream(vid);