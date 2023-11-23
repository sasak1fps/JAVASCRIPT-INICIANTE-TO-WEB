document.getElementById('texto').innerHTML = "meu primeiro <b>texto<b>";        

let a,b,c;
a=5;   b = 6;   c = 7;  console.log(a + b +c );

//comentario de uma linha
/*comentario 
de 
multiplas linhas */
function soma (n1 , n2 ){
    return n1 + n2 ;
}
document.writeln(soma(10 , 10));

function reaparadolar(real,dolar){
    return real * dolar;
}
    document.writeln(reaparadolar(10,5.08));

var r = 7.89;
var d = 5.08
var total = reaparadolar(r,d)
document.writeln("o valor em real é R$: "+r  + "o valor em dolar é u$: "+total)    
function hellow(){
    window.alert('hellow');
  
}
function celsius(fa){
    return (5 / 9 )* (fa-32);   
}
var x = celsius (77);
document.writeln(`a temperatura é de ${x} graus celcius`)

 // objeto 
    let carro = {marca:"ford" , modelo:"ka" ,ano:2015,placa:"abc-1234", buzina:function(){alert("biiiiiiiii")},
    completo: function(){
    return `a marca é ${this.marca} e o modelo é ${this.modelo}`}};

 console.log(carro);
 carro.buzina(4);
 console.log(carro.completo());

 function eventoclick(){
    return alert('clicou') ,   document.body.style.backgroundColor = "yellow";
 }
 function eventofbclick(){
    return alert('clicou 2x ') ,   document.body.style.backgroundColor = "blue";
 }
 function vermelho(){
    document.getElementById("test").style.backgroundColor ='red';  
 }
 function green(){
    document.getElementById("test").style.backgroundColor ='green';
 }
function foco(){
    document.getElementById("txt").style.borderRadius = '20px';
    document.getElementById("txt").style.boxShadow= "5px 5px 5px black";
    document.getElementById("txt").value="";
}
function mudou(){
    console.log('moudou')
}
function desfoco(){
    document.getElementById("txt").style.backgroundColor = 'lightgray';
}
function press(){
    document.getElementById("tx").style.backgroundColor = 'pink';
}
function  down(){
    document.getElementById("tx").style.backgroundColor = 'gray';
}
function up(){
    document.getElementById("tx").style.backgroundColor = 'brown';
}
              //array
const lista=["arroz","feijao" , "macarrao", "leite"]
const list=[]
list [0]="arroz";
list [1]="feijao";
list [2]="macarrao";
const lis = new Array ("arroz" , "feijao" , "macarrao", "leite");

const pessoas = ["dimitri","teixiera" , 30];//array
const pessoa = {nome:"dimitri" , sobre:"teixera",idade:30};//objeto
console.log(lista);
console.log(lista.pop());
console.log(lista.lastIndexOf('salsicha'));
console.log(lista.length);
console.log(pessoas[pessoas.length -1]);
pessoas.push("brasil")
console.log(pessoas)
Array.isArray(pessoas);//true or false
pessoas.shift()//remove  a primeira posiçao
pessoas.unshift("bonitao")// adiciona valor a primeira posiçao
console.log(pessoas);
pessoas.splice(1,0,"item adicionado1","item adicionado 2");
console.log(pessoas);

const valor = [1,2,3,4,5,];
const nvlaor = valor.map(item  => {
    return item *2;
    
})
console.log(nvlaor)



const lista1 =["arroz","feijao" , "macarrao", "leite"]
const lista2 =["queijo","mortadela" , "pao", "agua"]
const res = lista1.concat(lista2);
console.log(res.sort())
console.log(res.slice(4))

const numeros =[40,100,1,5,25,10];
numeros.sort(function(a,b) {return a-b});
console.log(numeros)

function maior(array){
    return Math.max.apply(null,array);
}
function menor(array){
    return Math.min.apply(null,array);
}
console.log(maior(numeros));
console.log(menor(numeros));

var interruptor='on';
if(interruptor == "ligada","on","acesa"){
    alert('lampada ligada')
}else{
    alert('lampada desligada')
}

var hora= new Date().getHours();
if (hora<12){
    alert('bom dia')
} else if (hora<18){
    alert('boa tarde')
} else {
    alert('boa noite')
}
function verificar(){
    let nome =document.getElementById("n").value;
    if(nome == "" || nome ==null){
        p=document.getElementById("teste");
        p.innerHTML="o campo nao pode ser vazio";
        p.style.color  = "red";
    }else{
        p=document.getElementById("teste");
        p.innerHTML="parabens tudo certo";
        p.style.color  = "green";
    }
}
       //switch
function cor(){
   let cor = document.getElementById("cores").value;
   switch (cor) {
    case "azul":
        document.body.style.backgroundColor="blue"
        break;
    case "vermelho":
        document.body.style.backgroundColor="vermelhor";
        break;
    case"amarelo":
    document.body.style.backgroundColor="yellow";
    break;
    default:
        document.getElementById('teste').innerHTML="no cor avaible " + cor;
        break;
   }
}
function semana(){
var l = document.getElementById("semana");
    var dia = new Date().getDay().toString();
    switch (dia) {
        case "0":
           l = document.getElementById("semana").innerHTML="domingo"
            break;
        case "1":
            l = document.getElementById("semana").innerHTML='segunda';    
          break;
        case"2":
        l = document.getElementById("semana").innerHTML='terça';
        break;
        case "3":
            l = document.getElementById("semana").innerHTML='quarta';
            break;
        case "4":
            l = document.getElementById("semana").innerHTML='quinta';
            break;
        case "5":
            l = document.getElementById("semana").innerHTML="sexta";
            break;
        case "6":
            l = document.getElementById("semana").innerHTML="sabado";
            break;
        default:
            document.getElementById("semana").innerHTML="no semanda detec"
            console.log(dia)
            break;
       }
}
//for
for (let i = 0; i < 10; i++) {  
console.log(i)
}
document.addEventListener("DOMContentLoaded", function() {
    for (let h = 1900; h < 2023; h++) {
        // Obtém a coleção de elementos com a classe "ano"
        let selectElement = document.getElementsByClassName("ano")[0];

        // Adiciona uma nova opção ao elemento select
        let option = document.createElement("option");
        option.value = h;
        option.text = h;
        selectElement.add(option);
    }
});                         
                    //setinteval
function ativar(){
    document.getElementById("tempo").innerHTML="comecou a contar";
tempo = setTimeout(function ativar(){
    document.body.style.backgroundColor = 'red'},5000); 
}
function desativar(){
    clearTimeout(tempo);
("    document.getElementByIdtempo").innerHTML="parou a contagem";
    document.body.style.backgroundColor='gray'
}

function ativa(){
tempoo = setInterval(function(){
    var cronometro =document.getElementById("tt").innerHTML;
    var soma = parseInt(cronometro)+1; 
    document.getElementById("tt").innerHTML=soma
}, 1000);}
function desativa(){
    clearInterval(tempoo);
}

function ati(){
    time =setInterval(function(){
    var  cronometo =document.getElementById("nega").innerHTML;
    var som = parseInt(cronometo)-1;
    if(som === 0){
       document.getElementById('nega').innerHTML='tempo esgotado' 
    }else{
        document.getElementById('nega').innerHTML=som;}
    },1000);
} 
    //    CLASSES 

 class barro{
    constructor(v1,v2,v3){
        this.modelo = v1;
        this.marca= v2;
        this.ano = v3;
    }
    busina(){
        return this.modelo+ " buzinou: biiiii";
    }
 }
 const uno = new barro("fiat","uno",2001);
 const gol = new barro ("gol","volkswagem",2013)
 console.log(uno.busina(),gol.busina());

      //DATAS 
 let data = new Date();
 console.log(data);

 let year = new Date().getFullYear();
 console.log(year);

 let month = data.getMonth();
 console.log(month); //mostra apenas numeros

 const meses =["janeiro","fev","mar","abril","maio","jun","julho","agos","set","out","novem","dec"];
 let mes = meses[data.getMonth()];
 console.log(mes);

 let dia = data.getDate();
 console.log(dia);

 let dias= data.getDay();
 console.log(dias); //mostra numero da semana

 const semina = ["domin","segun","terça","quart","quint","sext","saba"]
 let diasemna = semina[data.getDay()];
 console.log(diasemna)

 let hr = data.getHours();
 console.log(hr);

 let min = data.getMinutes();
 console.log(min);

 let seg = data.getSeconds();
 console.log(seg)

 let mls = data.getMilliseconds();
 console.log(mls);

 let databr = data.toLocaleString('pr-br');
 console.log(databr);

 var datainicial = new Date();
 var datafinal = new Date(2023,11,31);
 var dift=datafinal.getTime()- datainicial.getTime();
 var difd= Math.ceil(dift/(24*60*60*1000));
 console.log(difd + "dias");
 ////////////////JSON//////////////
document.addEventListener('DOMContentLoaded',function(){           
 const car = {
    marca:"fiat" , modelo:"uno" , ano:2000
 }
 let texto = JSON.stringify(car);
 document.getElementById('area').innerText=texto;
 let obj    = JSON.parse(texto);
 console.log(obj.modelo)
/*
 const ajax = new XMLHttpRequest();
 ajax.open('GET', 'https://viacep.com.br/ws/85802000/jason/');
 ajax.send();
 ajax.onload=function(){
     document.getElementById('ara').innerHTML=this.resposeText;
 } */
});

const idade1 = null;
const idade2 = 0;
document.body.innerText='sua idade é   '+ (idade2 ?? ' nao informado ');

document.body.innerText='sua idade é   '+ (idade1 ?? ' nao informado ');

                                    //desestruturaçao
var user = {
    nom:'ale', idade3: 20 , address:{     
        street:'rua l' , numbers:100,
    },
};

var { address , nom , numbers , idade3:age } = user
document.body.innerText =JSON.stringify({address,nom,numbers,age});

                    //REST OPERATOR
var { ...rest} = user;
document.body.innerText = JSON.stringify(rest)
console.log({rest})

const arrayy = [1,2,3,4,5,6,7,8,9,10];
const [first , secondo , ...resto] = arrayy;
document.body.innerHTML = JSON.stringify(resto);

//PROMISE
const SOMAdois = (a,b)=>{
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve (a + b );
        },2000);
    });
}
SOMAdois(1,3).then(soma=>{
  
    console.log(soma)
})
.catch(erro=>{
    console.log(erro)
})