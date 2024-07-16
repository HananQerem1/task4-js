const getProducts = async ()=> {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('itemID');
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
const displayProducts = async ()=>{
    const data = await getProducts();
    const images = data.images.map((img)=>{
        return `<img src="${img}"/>`;
    }).join(' ');
    const details = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>${data.price}</p>
    `;
    document.querySelector(".product-details").innerHTML = details;
    document.querySelector(".product-images").innerHTML = images;
}
displayProducts();