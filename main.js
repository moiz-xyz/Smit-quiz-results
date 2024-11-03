
let rollNo = document.getElementById("input");
let resultSection = document.getElementById("resultSection");

function check() {
    // Clear previous result data
    document.getElementById("name").innerHTML = "Name of the student";
    document.getElementById("html").innerHTML = "HTML score";
    document.getElementById("css").innerHTML = "CSS score";
    document.getElementById("hack").innerHTML = "Hackathon score";
    document.getElementById("js").innerHTML = "JavaScript score";
    
    let input = rollNo.value; 

    // if (rollNo === "271965") {
    //     adeem();
    // } else if (rollNo === "258317") {
    //     syedanas();
    // } else if (rollNo === "260679") {
    //     muizz();
    // } else if (rollNo === "260682") {
    //     affanali();
    // } else if (rollNo === "266865") {
    //     hadi();
    // } else if (rollNo === "299695") {
    //     mustufa();
    // } else if (rollNo === "267832") {
    //     muhamad();
    // } else if (rollNo === "267133") {
    //     mustufahussain();
    // } else if (rollNo === "259144") {
    //     abdulmoiz();
    // } else {
    //     alert("Invalid Roll Number");
    // }
     if (input === "271965") {
          adeem();
        } else if(input ==="258317"){
            syedanas();
        }else if(input ==="260679"){
            muizz();
        }else if(input ==="260682"){
            affanali();
        }else if(input ==="266865"){
            hadi();
        }else if(input ==="299695"){
            mustufa();
        }else if(input ==="267832"){
            muhamad()
        }else if(input ==="267133"){
            mustufahussain();
        }else if(input ==="259144"){
            abdulmoiz();
        }else if(input ==="263630"){
            wasif();
        }else if(input ==="265627"){
            hasnain();
        }else if(input ==="262365"){
            faizankhan();
        }else if(input ==="252944"){
            faizansomooro();
        }else if(input ==="269662"){
            huzaifa();
        }else if(input ==="258032"){
            noor();
        }else if(input ==="265599"){
            musab();
        }else if(input ==="258595"){
            ather();
        }else if(input ==="286820"){
            mohsnainRaza();
        }else if(input ==="265416"){
            abdullah();
        }else if(input ==="265887"){
            azeem();
        }else if(input ==="272187"){
            sharim();
        }else if(input ==="265811"){
            saad();
        }else if(input ==="261523"){
            aman() ;
        }else if(input ==="255275"){
            moosa();
        }else if(input === "265812"){
            anaszaidi();
        }else if(input ==="284822"){
            hamdan();
        }else if(input ==="265584"){
            saleh()
        } else if( input === "271752"){
            shariq();
        } else {
          alert("Invalid input");
        }
    
    resultSection.style.display = "block";
}


function adeem() {
    //  roll no 271965
  document.getElementById("name").innerHTML += " Adeem Amir";
  document.getElementById("html").innerHTML += " 35";
  document.getElementById("css").innerHTML += " 28";
  document.getElementById("hack").innerHTML += " 52";
  document.getElementById("js").innerHTML += " 32";
}
// roll no 258317
function syedanas(){
    document.getElementById("name").innerHTML += " Syed Anas Zaidi";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " 38";
    document.getElementById("js").innerHTML += " 31";
}
// roll no 260679
function muizz(){
    document.getElementById("name").innerHTML += " Abdul Muizz";
    document.getElementById("html").innerHTML +=  " 25";
    document.getElementById("css").innerHTML += " 35";
    document.getElementById("hack").innerHTML += " 25";
    document.getElementById("js").innerHTML += " 31";
}
//  roll no 260682
function affanali(){
    document.getElementById("name").innerHTML += " Affan Ali ";
    document.getElementById("html").innerHTML += " 24";
    document.getElementById("css").innerHTML += " 34";
    document.getElementById("hack").innerHTML += " 35";
    document.getElementById("js").innerHTML += " 31";
}
// 266865 
function hadi(){
    document.getElementById("name").innerHTML += " Abdul Hadi";
    document.getElementById("html").innerHTML += " 20";
    document.getElementById("css").innerHTML += " 33";
    document.getElementById("hack").innerHTML += " 40";
    document.getElementById("js").innerHTML += " 28";
}
// 299695
function mustufa(){
    document.getElementById("name").innerHTML += " Mustafa Pervez";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " 31";
    document.getElementById("hack").innerHTML += " 37";
    document.getElementById("js").innerHTML += " 27";
}
// 267832 Muhammad
function muhamad(){
    document.getElementById("name").innerHTML += " Muhammaad";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " Not participated";
    document.getElementById("js").innerHTML += " 27";
}
// 267133 Muhammad Mustafa Hussain
function  mustufahussain(){
    document.getElementById("name").innerHTML += " Muhammad Mustafa Hussain";
    document.getElementById("html").innerHTML += " 23";
    document.getElementById("css").innerHTML += " 32";
    document.getElementById("hack").innerHTML += " 22";
    document.getElementById("js").innerHTML += " 27";
}
// 259144 Abdul Moiz
function abdulmoiz(){
    document.getElementById("name").innerHTML += " Abdul Moiz";
    document.getElementById("html").innerHTML += " 25";
    document.getElementById("css").innerHTML += " 31";
    document.getElementById("hack").innerHTML += " 25";
    document.getElementById("js").innerHTML += " 27";
}
// 263630 Mohammad Wasif
function  wasif() {
    document.getElementById("name").innerHTML += " Mohammad Wasif";
    document.getElementById("html").innerHTML += " 19";
    document.getElementById("css").innerHTML += " 31";
    document.getElementById("hack").innerHTML += " 20";
    document.getElementById("js").innerHTML += " 26";
}
// 265627 Hasnain Ali 
function hasnain() {
    document.getElementById("name").innerHTML += " Hasnain Ali";
    document.getElementById("html").innerHTML += " 22";
    document.getElementById("css").innerHTML += " 34";
    document.getElementById("hack").innerHTML += " 32";
    document.getElementById("js").innerHTML += " 26";
}
// 262365 Muhammad Faizan Khan
function  faizankhan() {
    document.getElementById("name").innerHTML += " Muhammad Faizan Khan";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " 34";
    document.getElementById("js").innerHTML += " 25";
}
// 252944 Muhammad Faizan
function faizansomooro() {
    document.getElementById("name").innerHTML += " Muhammad Faizan";
    document.getElementById("html").innerHTML += " 24";
    document.getElementById("css").innerHTML += " 29";
    document.getElementById("hack").innerHTML += " 38";
    document.getElementById("js").innerHTML += " 25";
}
// 269662 Huzaifa
function huzaifa() {
    document.getElementById("name").innerHTML += " Huzaifa Ahmed";
    document.getElementById("html").innerHTML += " 21";
    document.getElementById("css").innerHTML += " 27";
    document.getElementById("hack").innerHTML += " 32";
    document.getElementById("js").innerHTML += " 25";
}
// 258032 Noor ul Hasan Siddique
function noor() {
    document.getElementById("name").innerHTML += " Noor ul Hasan Siddique";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " Not participated";
    document.getElementById("js").innerHTML += " 24";
}
// 265599 Musab Bin Ahsan
function musab() {
    document.getElementById("name").innerHTML += " Musab Bin Ahsan";
    document.getElementById("html").innerHTML += " 23";
    document.getElementById("css").innerHTML += " 26";
    document.getElementById("hack").innerHTML += " 30";
    document.getElementById("js").innerHTML += " 23";
}
// 258595 ather junaid siddique
function ather() {
    document.getElementById("name").innerHTML += " Ather Junaid Siddique";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " Not participated";
    document.getElementById("js").innerHTML += " 23";
}
// 286820 Mohsnain Raza
function mohsnainRaza() {
    document.getElementById("name").innerHTML += " Mohsnain Raza";
    document.getElementById("html").innerHTML += " 23";
    document.getElementById("css").innerHTML += " 26";
    document.getElementById("hack").innerHTML += " Not partrcipated";
    document.getElementById("js").innerHTML += " 23";
}
// 265416 Abdullah
function abdullah() {
    document.getElementById("name").innerHTML += " Abdullah";
    document.getElementById("html").innerHTML += " 24";
    document.getElementById("css").innerHTML += " 27";
    document.getElementById("hack").innerHTML += " 26";
    document.getElementById("js").innerHTML += " 22";
}
// 265887 Azeem Shahid
function azeem() {
    document.getElementById("name").innerHTML += " Azeem Shahid";
    document.getElementById("html").innerHTML += " 25";
    document.getElementById("css").innerHTML += " 22";
    document.getElementById("hack").innerHTML += " 18";
    document.getElementById("js").innerHTML += " 22";
}
// 272187 Hafiz sharim sohail
function sharim() {
    document.getElementById("name").innerHTML += " Hafiz sharim sohail";
    document.getElementById("html").innerHTML += " 23";
    document.getElementById("css").innerHTML += " 27";
    document.getElementById("hack").innerHTML += " 28";
    document.getElementById("js").innerHTML += " 21";
}
// 265811 syed saad zaidi
function saad() {
    document.getElementById("name").innerHTML += " Syed Saad Zaidi";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " 19";
    document.getElementById("js").innerHTML += " 19";
}
// 261523 Aman ul haq
function aman() {
    document.getElementById("name").innerHTML += " Aman ul haq";
    document.getElementById("html").innerHTML += " 21";
    document.getElementById("css").innerHTML += " 31";
    document.getElementById("hack").innerHTML += " 24";
    document.getElementById("js").innerHTML += " 20";
}
// 255275 Muhammad Moosa
function  moosa() {
    document.getElementById("name").innerHTML += " Muhammad Moosa";
    document.getElementById("html").innerHTML += " 23";
    document.getElementById("css").innerHTML += " 35";
    document.getElementById("hack").innerHTML += " 30";
    document.getElementById("js").innerHTML += " 19";
}
// 265812 syed anas zaidi
function anaszaidi() {
    document.getElementById("name").innerHTML += " Syed Anas Zaidi";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " 19";
    document.getElementById("js").innerHTML += " 19";
}
// 284822 Hamdan
function  hamdan(){
    document.getElementById("name").innerHTML += " Hamdan";
    document.getElementById("html").innerHTML += " Not participated";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " Not participated";
    document.getElementById("js").innerHTML += " 18";
}
// 265584 Saleh Raza
function  saleh(){
    document.getElementById("name").innerHTML += " Saleh Raza";
    document.getElementById("html").innerHTML += " 16";
    document.getElementById("css").innerHTML += " Not participated";
    document.getElementById("hack").innerHTML += " Not participated";
    document.getElementById("js").innerHTML += " 16";
}
// 271752 syed shariq ahmed
function  shariq(){
    document.getElementById("name").innerHTML += " Syed shariq ahmed";
    document.getElementById("html").innerHTML += " 21";
    document.getElementById("css").innerHTML += " 27";
    document.getElementById("hack").innerHTML += " Not particpated";
    document.getElementById("js").innerHTML += " 13";
}


// if (input === "271965") {
//   adeem();
// } else if(input ==="258317"){
//     syedanas();
// }else if(input ==="260679"){
//     muizz();
// }else if(input ==="260682"){
//     affanali();
// }else if(input ==="266865"){
//     hadi();
// }else if(input ==="299695"){
//     mustufa();
// }else if(input ==="267832"){
//     muhamad()
// }else if(input ==="267133"){
//     mustufahussain();
// }else if(input ==="259144"){
//     abdulmoiz();
// }else if(input ==="263630"){
//     wasif();
// }else if(input ==="265627"){
//     hasnain();
// }else if(input ==="262365"){
//     faizankhan();
// }else if(input ==="252944"){
//     faizansomooro();
// }else if(input ==="269662"){
//     huzaifa();
// }else if(input ==="258032"){
//     noor();
// }else if(input ==="265599"){
//     musab();
// }else if(input ==="258595"){
//     ather();
// }else if(input ==="286820"){
//     mohsnainRaza();
// }else if(input ==="265416"){
//     abdullah();
// }else if(input ==="265887"){
//     azeem();
// }else if(input ==="272187"){
//     sharim();
// }else if(input ==="265811"){
//     saad();
// }else if(input ==="261523"){
//     aman() ;
// }else if(input ==="255275"){
//     moosa();
// }else if(input === "265812"){
//     anaszaidi();
// }else if(input ==="284822"){
//     hamdan();
// }else if(input ==="265584"){
//     saleh()
// } else if( input === "271752"){
//     shariq();
// } else {
//   alert("Invalid input");
// }
