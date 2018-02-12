function showSpecs(car) {
  document.getElementById('show' + car).style.display="none";
  document.getElementById('hide' + car).style.display="block";
  document.getElementById(car).style.display="block";
}

function hideSpecs(car) {
  document.getElementById('show' + car).style.display="block";
  document.getElementById('hide' + car).style.display="none";
  document.getElementById(car).style.display="none";
}
