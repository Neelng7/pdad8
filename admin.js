const username = document.getElementById("admin-username");
const password = document.getElementById("admin-password");
var confirmLogin = false;
const adminUsername="Neelng", adminPassword="Bub41131009";
// const locationPrefix = "admin.html";
const locationPrefix =  "pdad8/";

function verify(){
    if(username.value == adminUsername && password.value == adminPassword){
        globalThis.confirmLogin = true;
        generatePredictionContent();
        showPredictions();
        generateReportContent();
    }else alert("Either password or username is wrong"); username.focus();
}

var database = firebase.database();
var adminDataInfo, i2=0;

const adminLogin = document.getElementById("admin-login").classList;
const adminContent = document.getElementById("admin-content").classList;
const reportDiv = document.getElementById("report-div").classList;
const searchDiv = document.getElementById("search-div").classList;
const unreadDiv = document.getElementById("unread-div").classList;
const PredictionAnchor = document.getElementById("PredictionAnchor").classList;
const ReportAnchor = document.getElementById("ReportAnchor").classList;
const UnreadAnchor = document.getElementById("UnreadAnchor").classList;

function showPredictions(){
    if(confirmLogin === true){
    adminLogin.toggle("hide", true);
    adminContent.toggle("hide", false);
    reportDiv.toggle("hide", true);
    searchDiv.toggle("hide", false);
    unreadDiv.toggle("hide", true);
    PredictionAnchor.toggle("selected", true);
    ReportAnchor.toggle("selected", false);
    UnreadAnchor.toggle("selected", false);
}}
function showReports(){
    if(confirmLogin === true){
    adminLogin.toggle("hide", true);
    adminContent.toggle("hide", false);
    reportDiv.toggle("hide", false);
    searchDiv.toggle("hide", true);
    unreadDiv.toggle("hide", true);
    PredictionAnchor.toggle("selected", false);
    ReportAnchor.toggle("selected", true);
    UnreadAnchor.toggle("selected", false);
}}
function showUnread(){
    if(confirmLogin === true){
    adminLogin.toggle("hide", true);
    adminContent.toggle("hide", false);
    reportDiv.toggle("hide", true);
    searchDiv.toggle("hide", true);
    unreadDiv.toggle("hide", false);
    PredictionAnchor.toggle("selected", false);
    ReportAnchor.toggle("selected", false);
    UnreadAnchor.toggle("selected", true);
}
}

const seachInput = document.querySelector("[data-seach]");
var dbusers, conUser; 
var unreadUsersArray = [], allUsersArray = [];
const userCardTemplate= document.querySelector("[data-user-template]");
const predictionCardContainer= document.querySelector("[data-prediction-cards-container]");

function generatePredictionContent(){

var dbusers_ref  = database.ref('/users/');
dbusers_ref.once("value",function(data){
dbusers = data.val();

for (const [idx, value] of Object.entries(dbusers)){
    globalThis.dbUsername = idx;
    allUsersArray.push(dbUsername.slice(8,));

for (const [index, val] of Object.entries(value)) {
    if(index.includes("first")){
        globalThis.dbFirstName = index;

        for (const [index2, val2] of Object.entries(val)) {
            if(index2.includes("last")){
            globalThis.dbLastName = index2;

            for (const [index3, val3] of Object.entries(val2)) {
                if(index3.includes("tag")) globalThis.dbTags = val3;
                if(index3.includes("pass")) globalThis.dbpassword = val3;
                if(index3.includes("predict")) globalThis.dbPrediction = val3;
            }}
        }
    }else if(index.includes("status")){
        for (const [idx2, value2] of Object.entries(val)) {
            if(idx2.includes("status")){

            const card = userCardTemplate.content.cloneNode(true).children[0]

            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const search_tags = card.querySelector("[data-tags]");
            const search_password = card.querySelector("[data-password]");
            const search_predictionMain = card.querySelector("[data-prediction-main]");
            const search_Type = card.querySelector("[data-type]");

            header.textContent = "Username: " + dbUsername.slice(8,);
            body.textContent = "Name: "+ dbFirstName.slice(11,) + " " + dbLastName.slice(10,);
            search_password.textContent = "Password: " + dbpassword;

            if(dbPrediction.length<70){
                search_predictionMain.textContent = "Prediction: " + dbPrediction;
                search_predictionMain.title = dbPrediction;
            }else{
                search_predictionMain.textContent = "Prediction: " + dbPrediction.slice(0,65) + "...";
                search_predictionMain.title = dbPrediction;
            }
            search_Type.textContent = "Type: " + value2;
            if(dbTags=="") search_tags.textContent = "No given tags";
            else search_tags.textContent = "Tags: "+ dbTags;
            predictionCardContainer.append(card);
            document.getElementById("checked").id = "checked" + i2++

            }else if(value2 == false){
                unreadUsersArray.push(dbUsername.slice(8,));
            }
        }
    }
}
}
document.getElementById("predictionsCount").value = allUsersArray.length;
document.getElementById("unreadCount").value = unreadUsersArray.length;
generateUnreadContent();
});
}


seachInput.addEventListener("input",(element) => {
    const searchValue = element.target.value.toLowerCase();
    const adminSearchArray = [];

    const cardEls = document.querySelectorAll(".card");
    cardEls.forEach((value) => {
    
    const dbUsername2 = value.children[0].textContent.toLowerCase();
    const dbName2 = value.children[1].textContent.toLowerCase();
    const dbpassword2 = value.children[2].textContent.toLowerCase();
    const dbTags2 = value.children[4].textContent.toLowerCase();
    const dbType2 = value.children[5].textContent.toLowerCase();
    
    const searchValueSplit = searchValue.split(" ");

    for(let n=0; n<searchValueSplit.length; n++){
        if(dbUsername2.includes(searchValueSplit[n]) || dbName2.includes(searchValueSplit[n]) || 
            dbTags2.includes(searchValueSplit[n])){
            value.style.display = "grid";
        }else if(dbpassword2.includes(searchValueSplit[n]) || dbType2.includes(searchValueSplit[n])){
            value.style.display = "grid";
        }else{
            value.style.display = "none";
            adminSearchArray.push(1);   
            break;
        }
    }
        document.getElementById("resultsCount").innerText = (cardEls.length-adminSearchArray.length) + " Search Reults Found"
});
});


function checkoutSearchedPrediction(referenceIndex){
if(confirm("Open Prediction?")){

    const predictIndex = parseInt(referenceIndex.slice(7,));

    const cardEls = document.querySelectorAll(".card");
    cardEls.forEach((value, index) => {

    if(index == predictIndex){

        var updatedbusername = value.children[0].textContent.slice(10,);
        var updatedbName = value.children[1].textContent.slice(6,).split(" ");
        var updatedbpassword = value.children[2].textContent.slice(10,); 

        window.location.href = `/predictions/modify-prediction?${updatedbusername}`+
        `+${updatedbName[0]}+${updatedbName[1]}+${updatedbpassword}`;

    }
})
}
}

const unreadCardTemplate = document.querySelector("[data-unread-template]");
const unreadCardContainer= document.querySelector("[data-unread-cards-container]");

function generateUnreadContent(){
    unreadUsersArray.forEach((user) => {
        const unreadCards = unreadCardTemplate.content.cloneNode(true).children[0];

        const unreadUsername = unreadCards.querySelector("[data-unread-username]");
        unreadUsername.textContent = "Username: " + user;
        const readButton = unreadCards.querySelector("[data-read]");
        readButton.id = user;
        unreadCardContainer.append(unreadCards);
    })
}

function revealUnreadCard(cardUsername){
    const unreadUserID = "checked"+allUsersArray.indexOf(cardUsername.slice(10,));
    showPredictions();
    document.getElementById(unreadUserID).classList.toggle("focus", true);

    const cardEls = document.querySelectorAll(".card");
    cardEls.forEach((value) => {    
        const dbUsername2 = value.children[0].innerHTML;
        if(dbUsername2.includes(cardUsername)) value.style.display = "grid";
        else value.style.display = "none";
    });
}

function changeReadStatus(userId){
    if(confirm("Prediction Scaned?")){
        database.ref(`/users/UserId: ${userId}/status/`).update({
            Scan: true
        });
        callUnread();
    }
}

const userReportTemplate= document.querySelector("[data-report-template]");
const reportsCardContainer= document.querySelector("[data-report-cards-container]");
var emails = [], emailIndex = [], i=0;

function generateReportContent(){

var dbReports_ref  = database.ref('/Reports/');
dbReports_ref.once("value",function(data){
dbusdbReports_Main = data.val();


for (const [idx, value] of Object.entries(dbusdbReports_Main)){

    if(idx.includes("count")){
        document.getElementById("countID").value = value;
    }

    for (const [idx2, value2] of Object.entries(value)){
        if(idx2.includes("email")) emails.push(value2); emailIndex.push(idx2);
        
        if(idx2.includes("report")){
            globalThis.dbreport = value2;
            globalThis.dbreportIndex = idx2;
          
        const reportsCard = userReportTemplate.content.cloneNode(true).children[0]
        const report = reportsCard.querySelector("[data-report]");
        report.textContent = dbreportIndex + ": " + dbreport;
        reportsCardContainer.append(reportsCard);
        document.getElementById("deleteReport").id = "deleteReport" + i++
    }
}
}

const cardEls = document.querySelectorAll(".card2");
cardEls.forEach((val, index) => {
    const email = val.children[1];
    if(emails[index] == "") email.textContent = emailIndex[index] + ": No Given Email";
    else email.textContent = emailIndex[index] + ": " + emails[index];
    document.getElementById("reportsCount").value = index+1;
});
});
}

function deleteReport(deleteID){
    const deleteIndex = parseInt((deleteID.split("port"))[1]);

    const cardEls = document.querySelectorAll(".card2");
    const reportIndex = (cardEls[deleteIndex]).children[0].textContent.split(":");
    const emailIndex2 = (cardEls[deleteIndex]).children[1].textContent.split(":");

    if(confirm("Delete Report?")){
    database.ref('/Reports/emails/' + emailIndex2[0]).remove();
    database.ref('/Reports/reports/' + reportIndex[0]).remove();
    alert("Report Deleted");
    callReport();
}}

function updateReportCount(){
    database.ref('/Reports/').update({count:parseInt(document.getElementById("countID").value)});
    alert("Count Changed");
    callReport();
}

function showPassword(){
    document.getElementById("showPassword").classList.toggle("fa-eye");
    document.getElementById("showPassword").classList.toggle("fa-eye-slash");

    const passModify = document.getElementById("admin-password");
    if (passModify.type === "password") passModify.type = "text";
    else passModify.type = "password";    
}



function callReport(){
if(confirmLogin === true) window.location.href=`/${locationPrefix}?type=reports&user=${adminUsername}&code=${adminPassword}`;      
}

function callPredictions(){
if(confirmLogin === true) window.location.href=`/${locationPrefix}?type=predictions&user=${adminUsername}&code=${adminPassword}`; 
}

function callUnread(){
if(confirmLogin === true) window.location.href=`/${locationPrefix}?type=unread&user=${adminUsername}&code=${adminPassword}`; 
}

const URLparameters = new URLSearchParams(window.location.search);
if(URLparameters.has('user')){
    const URLuser = URLparameters.get("user");
    const URLpass = URLparameters.get("code");
    const URLtype = URLparameters.get("type");
    if(URLuser==adminUsername && URLpass==adminPassword){
        globalThis.confirmLogin = true;
        generatePredictionContent();
        generateReportContent();
        if(URLtype == "reports") showReports();
        else if(URLtype == "predictions") showPredictions();
        else if(URLtype == "unread") showUnread();
    }
}
