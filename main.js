const URL_API = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_VsMABMSQbdROhoEevOmZ2STotNxDg00fwXek5wBTMG4AvECYpSFs4DUVcxqMoKQP';
const boton = document.querySelector('#recargar')


const recargar = async () => {

    const res = await fetch(URL_API)
    const data = await res.json()


    console.log(data)
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const img3 = document.querySelector('#img3')

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;



}
recargar();
boton.addEventListener('click', recargar)

