hour = () => {
  fecha = new Date();
  hora = fecha.getHours();
  minuto = fecha.getMinutes();
  segundo = fecha.getSeconds();
  if (hora < 10) {
    hora = '0' + hora;
  }
  if (minuto < 10) {
    minuto = '0' + minuto;
  }
  if (segundo < 10) {
    segundo = '0' + segundo;
  }
  mireloj = hora + ' : ' + minuto + ' : ' + segundo;
  return mireloj;
};
Año = () => {
  x = new Date();
  dia = x.getDate();
  mes = x.getMonth() + 1;
  if (mes < 10) {
    mes = '0' + mes;
  }
  año = x.getUTCFullYear();
  miFecha = dia + '/' + mes + '/' + año;
  return miFecha;
};
actualizarHora = () => {
  mihora = hour();
  mireloj = document.getElementById('reloj');
  mireloj.innerHTML = mihora;
};
actualizarFecha = () => {
  mifecha = Año();
  console.log(mifecha);
  miFecha = document.getElementById('fecha');
  miFecha.innerHTML = mifecha;
};
setInterval(actualizarHora, 1000);
setInterval(actualizarFecha, 1000);

darkMode = () => {
  const element = document.body;
  element.classList.toggle('dark-mode');
};
