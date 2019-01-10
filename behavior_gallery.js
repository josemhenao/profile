document.addEventListener("DOMContentLoaded", function(event) {

  items = document.querySelectorAll(".gallery-row > .photo-item")
  element_1 = items[0];
  element_2 = items[1];
  element_3 = items[2];
  element_4 = items[3];
  element_5 = items[4];
  element_6 = items[5];

  element_1.addEventListener("click", function(){
    if (element_1.className == "small") {
      element_1.className = "";
      element_1.childNodes[3].style.display = 'none';
    }else{
      element_1.className = "small";
      element_1.childNodes[3].style.display = 'block';
    }
  });

  element_2.addEventListener("click", function(){
    if (element_2.className == "small") {
      element_2.className = "";
      element_2.childNodes[3].style.display = 'none';
    }else{
      element_2.className = "small";
      element_2.childNodes[3].style.display = 'block';
    }
  });

  element_3.addEventListener("click", function(){
    if (element_3.className == "small") {
      element_3.className = "";
      element_3.childNodes[3].style.display = 'none';
    }else{
      element_3.className = "small";
      element_3.childNodes[3].style.display = 'block';
    }
  });

  element_4.addEventListener("click", function(){
    if (element_4.className == "small") {
      element_4.className = "";
      element_4.childNodes[3].style.display = 'none';
    }else{
      element_4.className = "small";
      element_4.childNodes[3].style.display = 'block';
    }
  });
  element_5.addEventListener("click", function(){
    if (element_5.className == "small") {
      element_5.className = "";
      element_5.childNodes[3].style.display = 'none';
    }else{
      element_5.className = "small";
      element_5.childNodes[3].style.display = 'block';
    }
  });
  element_6.addEventListener("click", function(){
    if (element_6.className == "small") {
      element_6.className = "";
      element_6.childNodes[3].style.display = 'none';
    }else{
      element_6.className = "small";
      element_6.childNodes[3].style.display = 'block';
    }
  });

  
});