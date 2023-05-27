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


        html += `<div class="gallery-photo"><img src="`+img+`" loading="lazy" alt="..." />`;
        html += `</div>`;
      });

      document.querySelector(".gallery-photos.page").innerHTML = html;
      window.Lately && Lately.init({ target: ".photo-time" });
    })
    .catch();


}

$(document).ready(function () {
  $(".arrow").click(function(){
    $(".bg").remove();
    $(".text").remove();
    $(window).scroll();
  })
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1000) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
