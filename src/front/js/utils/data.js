

export default async function get(){
    const url = "https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/categorias"
    const response = await fetch(url,{
        method: 'GET' 
    })
    if (response.ok){
        return response.json();
    }


}