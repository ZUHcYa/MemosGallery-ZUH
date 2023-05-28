const domain = "https://hlastro.duckdns.org";
const tag = "picture";
const url = domain+"/api/memo?creatorId=1&tag="+tag;

photos();

function photos() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let html = "",
        imgs = [];
      data.data.forEach((item) => {    
        item.resourceList.forEach((resource) => {
          imgs = imgs.concat(domain+"/o/r/"+resource.id+"/"+resource.publicId+"/"+resource.filename);
        });     
      });
      imgs.forEach((img) => {
        html += `<div><img src="`+img+`" loading="lazy" alt="..." />`;
        html += `</div>`;
      });

      document.querySelector(".grid").innerHTML = html;
    })
    .catch();
}