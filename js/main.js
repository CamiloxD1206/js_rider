// //primerafase------------------------------------------------
// function datos(){
// let meses = document.getElementById("meses");
// let selectMes =meses.options[meses.selectedIndex].text;
// //----------------------------------------------
// let nombre=document.getElementById("nombre").value;
// //-------------------------------------------------
// let años = document.getElementById("año");
// let selectaño =años.options[años.selectedIndex].text;
// //-------------------------------------------------
// let trimes=document.getElementById("trimestre").value;
// //----------------------------------------------
// let competencia=document.getElementById("competencia").value;
// //-----------------------------------------------------------------------------------------
// let radio = document.querySelector('input[name="ganador"]:checked').value;
// if(radio=='gana') {
//     let texto=document.querySelector('#texto').textContent=(`El aprediz ${nombre} aprobo con exito la competencia ${competencia} en el ${trimes} trimestre,durante el mes de ${selectMes} en el año ${selectaño}`);
// } else if(radio=='pierde') {
//     let texto=document.querySelector('#texto').textContent=(`El aprediz ${nombre} no aprobo con exito la competencia ${competencia} en el ${trimes} trimestre,durante el mes de ${selectMes} en el año ${selectaño}`);
// }

   
// }
//segundafase-------------------index_segunda_fase---------------------------------------------

// function dracula(nombre,meses,año,competencia,trimestre){
//     let radio = document.querySelector('input[name="ganador"]:checked').value;


//    let texto2=document.querySelector('#texto').textContent=(`El aprendiz ${nombre} ${radio} la competencia ${trimestre},en el ${competencia} trimestre durante el mes de ${meses} del año ${año}`);

   
// }

//tercerafase---------------index_segunda_fase-------------------------------------------------
function dracula(nombre,fecha,competencia,trimestre,radio){
    const arregloo = [];
    arregloo.push(nombre,fecha,competencia,trimestre,radio);
    const fechi=arregloo[1]
    let fechis=fechi.split('-')
    let mes=fechis[1];
    mostrar(mes)
   
    recibe(arregloo)
};
function recibe(arregloo){
    console.log(arregloo);
    
}
function mostrar(mes) {
convertidor(mes);
    
}

function convertidor(mes){


 switch(mes){
 case '01':
  console.log('el mes es enero');
break;
 case '02':
  console.log('el mes es febrero');
  break;
 case '03':
  console.log('el mes es marzo');
 ;
    break;
case '04':
    console.log('el mes es abril');
 break;
    
 case '05':
 console.log('el mes es mayo');
  break;
  case '06':
  console.log('el mes es junio');
   break;
    
   case '07':
    console.log('el mes es julio');
   break
   case '08':
    console.log('el mes es agosto');
    break
    
     case '09':
  console.log('el mes es septimebre')
  break
    
   case '10':
   console.log('el mes es octubre');
    break;
   case '11':
  console.log('el mes es noviembre')
    break
    
     case '12':
    console.log('el mes es diciembre');
    break;
   
    
    
     }
    
  }
let contador=0;
const divi=document.querySelector('#area');
divi.classList.add('div_opcion')
const seleccion=document.querySelector('#competencia')

seleccion.addEventListener('input',()=>{
 if(seleccion.value=='Analisis'){
    divi.classList.remove('div_opcion')
      let textoanalisiss=document.createElement('select')
        let textoanalisis2=document.createElement('option')
            textoanalisiss.appendChild(textoanalisis2);
            textoanalisis2.innerHTML='<option id="Analisis" >Analisis</option>'
            divi.appendChild(textoanalisiss);
    }else if(seleccion.value=='Diseño'){
        divi.classList.remove('div_opcion')
        let textoanalisis=document.createElement('select')
    let textoanalisis1=document.createElement('option')
            textoanalisis.appendChild(textoanalisis1);
            textoanalisis1.innerHTML='<option id="Diseño" >Diseño</option>'
            divi.appendChild(textoanalisis);}
})

