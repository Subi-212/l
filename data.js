fetch("data.json")

.then(function(response){
    return response.json();
})
.then(function(data){
    let placeholder= document.querySelector("#data-output");
    let out ="",c=0;
    for(let product of data){
        out += `
        <tr>
        <td>${product.ISBN}</td>
        <td>${product.Title}</td>
        <td>${product.Author}</td>
        <td>${product.Subject}</td>
        <td>${product.Publishdate}</td>
        </tr>
        `;
        c++;
    }
    placeholder.innerHTML = out;
    co.innerHTML=c;
})