
const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
let interes 
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#lista-tabla tbody');
function updateText() {
    var selectOption = document.getElementById("selectOption");
    var text = document.getElementById("text");


    if (selectOption.value === "option1") {
        text.innerHTML = "Inclusion Financiera";
    } else if (selectOption.value === "option2") {
        text.innerHTML = "Tradicional Fija";
    } else if (selectOption.value === "option3") {
        text.innerHTML = "Uva";
     
    
    }
}

  





btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, interes, tiempo.value);
})

function calcularCuota(monto, interes, tiempo) {

    while (llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');

    let pagoInteres = 0, pagoCapital = 0, cuota = 0;
    var tem;
    var selectOption = document.getElementById("selectOption");
    if (selectOption.value === "option1") {
        tem = 0.04075; 
        interes = 1.4990/tiempo;
    } else if (selectOption.value === "option2") {
        tem = 0.0625;
        interes = 1.75/tiempo;
    } else if (selectOption.value === "option3") {
        tem = 0.00958;
        interes = 1.115/tiempo;
    }
    //(J5/(1-((1+J5)^(-F5))))*capital1
    

    
    
    
    cuota = ((tem / (1-(Math.pow(1+tem,(-tiempo))))) * monto) 
    for (let i = 1; i <= tiempo; i++) {
        
        cuotaiva= cuota + ((((tem+1) * monto)-monto)*0.21)
        pagoInteres = parseFloat(monto * tem);
        pagoCapital = cuota - (monto*tem);
        capxinteres = monto * (1+tem);
        saldo= parseFloat(capxinteres - cuota)

        if(i>=1){
            monto = saldo;
        }
        

    
        


        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="color:white">${i}</td>
            <td style="color:white">${fechas[i]}</td>
            <td style="color:yellow">$${cuotaiva.toFixed(2)}</td>
            <td style="color:white">$${pagoInteres.toFixed(2)}</td>
            <td style="color:white">$${saldo.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)
    }
 
}



function cerrarAlerta() {
    var alerta = document.getElementById("alerta");
    alerta.style.display = "none";
  }
  
  function mostrarAlerta(mensaje) {
    var alerta = document.getElementById("alerta");
    alerta.innerHTML = '<span class="close" onclick="cerrarAlerta()">&times;</span><strong>¡Alerta!</strong> ' + mensaje;
    alerta.style.display = "block";
  }
  