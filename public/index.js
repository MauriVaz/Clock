hour = () => {
  fecha = new Date();
  hora = fecha.getHours();
  minuto = fecha.getMinutes();
  segundo = fecha.getSeconds();
  huso=Number(GMT=fecha.toString().substring(28,fecha.toString().length-26))
  if (hora < 10) {
    hora = '0' + hora;
  }
  if (minuto < 10) {
    minuto = '0' + minuto;
  }
  if (segundo < 10) {
    segundo = '0' + segundo;
  }
  
  mireloj ="GMT "+ huso+ "<br/> " +hora + ' : ' + minuto + ' : ' + segundo;
  return mireloj;
};
Año = () => {
  x = new Date();
  diaSemana=x.toString().substring(0,3)
  dia = x.getDate();
  mes = x.getMonth() + 1;
  if (mes < 10) {
    mes = '0' + mes;
  }
  año = x.getUTCFullYear();
  miFecha = diaSemana + " " +dia + '/' + mes + '/' + año;
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

actualizarTitle=()=>{
  miHola=document.getElementById("titleChange")
  miHola.innerHTML = "Show the date and hour"
}
setInterval(actualizarTitle,1000)
setInterval(actualizarHora, 1000);
setInterval(actualizarFecha, 1000);

darkMode = () => {
  const element = document.body;
  element.classList.toggle('dark-mode');
};
