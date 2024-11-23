
let rollNo = document.getElementById("input");
let resultSection = document.getElementById("resultSection");

const students = {
    "271965": {
        name: "Adeem Amir",
        html: 35,
        css: 28,
        hack: 52,
        js: 32
    },
    "258317": {
        name: "Syed Anas Zaidi",
        html: "Not participated",
        css: "Not participated",
        hack: 38,
        js: 31
    },
    "260679": {
        name: "Abdul Muizz",
        html: 25,
        css: 35,
        hack: 25,
        js: 31
    },
    "260682": {
        name: "Affan Ali",
        html: 24,
        css: 34,
        hack: 35,
        js: 31
    },
    "266865": {
        name: "Abdul Hadi",
        html: 20,
        css: 33,
        hack: 40,
        js: 28
    },
    "299695": {
        name: "Mustafa Pervez",
        html: "Not participated",
        css: 31,
        hack: 37,
        js: 27
    },
    "267832": {
        name: "Muhammad",
        html: "Not participated",
        css: "Not participated",
        hack: "Not participated",
        js: 27
    },
    "267133": {
        name: "Muhammad Mustafa Hussain",
        html: 23,
        css: 32,
        hack: 22,
        js: 27
    },
    "259144": {
        name: "Abdul Moiz",
        html: 25,
        css: 31,
        hack: 25,
        js: 27
    },
    "263630": {
        name: "Mohammad Wasif",
        html: 19,
        css: 31,
        hack: 20,
        js: 26
    },
    "265627": {
        name: "Hasnain Ali",
        html: 22,
        css: 34,
        hack: 32,
        js: 26
    },
    "262365": {
        name: "Muhammad Faizan Khan",
        html: "Not participated",
        css: "Not participated",
        hack: 34,
        js: 25
    },
    "252944": {
        name: "Muhammad Faizan",
        html: 24,
        css: 29,
        hack: 38,
        js: 25
    },
    "269662": {
        name: "Huzaifa Ahmed",
        html: 21,
        css: 27,
        hack: 32,
        js: 25
    },
    "258032": {
        name: "Noor ul Hasan Siddique",
        html: "Not participated",
        css: "Not participated",
        hack: "Not participated",
        js: 24
    },
    "265599": {
        name: "Musab Bin Ahsan",
        html: 23,
        css: 26,
        hack: 30,
        js: 23
    },
    "258595": {
        name: "Ather Junaid",
        html: 20,
        css: 27,
        hack: 35,
        js: 28
    },
    "286820": {
        name: "Mohsnain Raza",
        html: 22,
        css: 28,
        hack: 30,
        js: 22
    },
    "265811": {
        name: "Syed Saad Zaidi",
        html: "Not participated",
        css: "Not participated",
        hack: 19,
        js: 19
    },
    "265584": {
        name: "Saleh Raza",
        html: 16,
        css: "Not participated",
        hack: "Not participated",
        js: 16
    },
    "272187": {
        name: "Hafiz Sharim Sohail",
        html: 23,
        css: 27,
        hack: 28,
        js: 21
    },
    "265812": {
        name: "Syed Anas Zaidi",
        html: "Not participated",
        css: "Not participated",
        hack: 19,
        js: 19
    },
    "284822": {
        name: "Hamdan",
        html: "Not participated",
        css: "Not participated",
        hack: "Not participated",
        js: 18
    },
    "265887": {
        name: "Azeem Shahid",
        html: 25,
        css: 22,
        hack: 18,
        js: 22
    },
    "261523": {
        name: "Aman ul Haq",
        html: 21,
        css: 31,
        hack: 24,
        js: 20
    },
    "255275": {
        name: "Muhammad Moosa",
        html: 23,
        css: 35,
        hack: 30,
        js: 19
    },
    "271752": {
        name: "Syed Shariq Ahmed",
        html: 21,
        css: 27,
        hack: "Not participated",
        js: 13
    },
    "265416": {
        name: "Abdullah",
        html: "Not available",
        css: "Not available",
        hack: "Not available",
        js: "Not available"
}
}
function check (){
        let input = rollNo.value;
        let student = students[input];
    
        if (!student) {
            alert("Your data is not available in our record. Please add it.");
            return;
        }
    
        let html = student.html === "Not participated" ? 0 : student.html;
        let css = student.css === "Not participated" ? 0 : student.css;
        let hack = student.hack === "Not participated" ? 0 : student.hack;
        let js = student.js === "Not participated" ? 0 : student.js;
    
        let htmlperc = (html / 30) * 100;
        let cssperc = (css / 44) * 100;
        let hacperc = (hack / 50) * 100;
        let jsperc = (js / 35) * 100;
        let total = html + css + hack + js;
        let totalperc = (total / 159) * 100;
    
        document.getElementById("name").innerHTML = "Name of the student: " + student.name;
        document.getElementById("html").innerHTML = "HTML score: " + student.html;
        document.getElementById("htmlperc").innerHTML = "HTML Percentage: " + htmlperc.toFixed(2) + "%";
        document.getElementById("css").innerHTML = "CSS score: " + student.css;
        document.getElementById("cssperc").innerHTML = "CSS Percentage: " + cssperc.toFixed(2) + "%";
        document.getElementById("hack").innerHTML = "Hackathon score: " + student.hack;
        document.getElementById("hackperc").innerHTML = "Hackathon Percentage: " + hacperc.toFixed(2) + "%";
        document.getElementById("js").innerHTML = "JavaScript score: " + student.js;
        document.getElementById("jsperc").innerHTML = "JavaScript Percentage: " + jsperc.toFixed(2) + "%";
        document.getElementById("totalfront").innerHTML = "Total Front end score: " + total;
        document.getElementById("totperc").innerHTML = "Total front end percentage: " + totalperc.toFixed(2) + "%";
    
        resultSection.style.display = "block";
    }
    function add(){
let adddata = localStorage.getItem("students");
  let students = adddata ? JSON.parse(adddata) : [];
        let studentsdata= {
         stdname : prompt("What is the name of student"),
         rollNo : prompt ("What is your roll no"),
         htmlscore: prompt("What is your html score"),
         cssscore:prompt("What is your css score"),
         hackscrore:prompt("What is your hackathon score"),
         jsscore:prompt("What is your Java script score")
        }
        students.push(studentsdata);
        console.log(students)
}
