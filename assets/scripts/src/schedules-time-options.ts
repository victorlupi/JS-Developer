import format from "date-fns/format";
import startOfMonth from "date-fns/startOfMonth";
import locale from "date-fns/locale/pt-BR"

const page = document.querySelector("#schedules-time-options");

if (page) {

  const hoje = new Date();
  let inicioMes = startOfMonth(hoje);

  let horarioDia = page.querySelector("h3") as HTMLHeadElement;

  const render = () => {
    horarioDia.innerText = format(inicioMes, "cccc ',' d 'de' MMMM 'de' yyyy", { locale });
  }



  render();

}