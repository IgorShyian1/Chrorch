function myImg() {
    let elem = document.getElementById('img_1'); // отримуємо елемент по ID
    let style = getComputedStyle(elem); // отримуємо його стилі
    if (style.display === 'none') {
      document.getElementById('img_1').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_1').style.display='none';
    }
  }

  function myImg1() {
    let elem = document.getElementById('img_2'); // отримуємо елемент по ID
    let style = getComputedStyle(elem); // отримуємо його стилі
    if (style.display === 'none') {
      document.getElementById('img_2').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_2').style.display='none';
    }
  }




  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }


  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }