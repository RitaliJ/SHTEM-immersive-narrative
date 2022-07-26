export default function dataleak(){
    const x = JSON.stringify(localStorage.getItem('shtemAccount'));
    return(
        x
    )
}