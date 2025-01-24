function myFunction(imgs) {
  // Отримайте розгорнуте зображення
  var expandImg = document.getElementById("expandedImg");
  // Отримайте текст зображення
  var imgText = document.getElementById("imgtext");
  // Використовуйте той самий src у розгорнутому зображенні, що й зображення, на яке клацнули в сітці
  expandImg.src = imgs.src;
  // Використовуйте значення атрибута alt зображення, яке можна натиснути, як текст усередині розгорнутого зображення
  imgText.innerHTML = imgs.alt;
  // Показати елемент контейнера (прихований за допомогою CSS)
  expandImg.parentElement.style.display = "block";
}




  