var database = firebase.database();

const problem = document.getElementById("reportProblem");
const email = document.getElementById("reportEmail");
var numberOfReports, numberOfReports2, reportCount;

function fnScroll(){
    window.scrollTo(0,document.body.scrollHeight);
    document.getElementById("problemButton").classList.toggle("hide", true);
    document.getElementById("problemButton2").classList.toggle("hide",false);
    document.getElementById("problemButton3").classList.toggle("hide",false);
    email.classList.toggle("hide",false);
    problem.classList.toggle("hide",false);
    problem.focus();
}

function show(){
    document.getElementById("problemButton").classList.toggle("hide", true);
    document.getElementById("problemButton2").classList.toggle("hide",false);
    document.getElementById("problemButton3").classList.toggle("hide",false);
    email.classList.toggle("hide",false);
    problem.classList.toggle("hide",false);
}

function report(){
if(problem.value == "" || problem.value == null){
    alert("Report cannot be empty");;
}else{
    var numberOfReports_ref = database.ref('/Reports/' + "count");
    numberOfReports_ref.once("value",function(data){
    numberOfReports = data.val() + 1;

    database.ref('/Reports/').update({
        count: numberOfReports
    });
    database.ref('/Reports/' + "reports").update({
        ["report" + numberOfReports]: problem.value
    });
    database.ref('/Reports/' + "emails").update({
        ["email" + numberOfReports]: email.value
    });
    alert("Thank you. The Problem has been Reported");
    // location.reload();
    cancel();
    problem.value="";
    email.value="";   
    callReport();
    });
}
}

function cancel(){
    document.getElementById("problemButton").classList.toggle("hide", false);
    document.getElementById("problemButton2").classList.toggle("hide",true);
    document.getElementById("problemButton3").classList.toggle("hide",true);
    email.classList.toggle("hide",true);
    problem.classList.toggle("hide",true);
}


