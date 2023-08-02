var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i]);
        var div = document.createElement("div");
        div.innerHTML= `<div class="card" style="width: 40rem;">
       <div class="col mb-3">
          <img src="${data1[i].flag}" class="card-img-top" alt="...">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data1[i].name}</h5>
              <p class="card-text">${data1[i].region}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <pclass="card-text">${data1[i].capital}</p>
              <pclass="card-text">${data1[i].countrycode}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        </div> `
        document.body.append(div);
    }
});  
      

