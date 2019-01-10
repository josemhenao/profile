document.addEventListener("DOMContentLoaded", function(event) {
	//alert('Hello!');
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
  		if (thumbnailElement.className == "small") {
  			thumbnailElement.className = "";
  			document.getElementById("alt_img_profile").style.display = 'block';
  		}else{
  			thumbnailElement.className = "small";
  			document.getElementById("alt_img_profile").style.display = 'none';
  		}
	});
});