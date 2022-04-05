var database = firebase.database();

const users = 
[
    {
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
    }
  ]

const userComments = [
  {
    "postId": 11,
    "id": 51,
    "name": "molestias et odio ut commodi omnis ex",
    "email": "Laurie@lincoln.us",
    "body": "perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas"
  },
  {
    "postId": 11,
    "id": 52,
    "name": "esse autem dolorum",
    "email": "Abigail.OConnell@june.org",
    "body": "et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus"
  },
  {
    "postId": 11,
    "id": 53,
    "name": "maiores alias necessitatibus aut non",
    "email": "Laverne_Price@scotty.info",
    "body": "a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum"
  },
  {
    "postId": 11,
    "id": 54,
    "name": "culpa eius tempora sit consequatur neque iure deserunt",
    "email": "Kenton_Vandervort@friedrich.com",
    "body": "et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo"
  },
  {
    "postId": 11,
    "id": 55,
    "name": "quas pariatur quia a doloribus",
    "email": "Hayden_Olson@marianna.me",
    "body": "perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam"
  },
  {
    "postId": 12,
    "id": 56,
    "name": "et dolorem corrupti sed molestias",
    "email": "Vince_Crist@heidi.biz",
    "body": "cum esse odio nihil reiciendis illum quaerat\nest facere quia\noccaecati sit totam fugiat in beatae\nut occaecati unde vitae nihil quidem consequatur"
  },
  {
    "postId": 12,
    "id": 57,
    "name": "qui quidem sed",
    "email": "Darron.Nikolaus@eulah.me",
    "body": "dolorem facere itaque fuga odit autem\nperferendis quisquam quis corrupti eius dicta\nrepudiandae error esse itaque aut\ncorrupti sint consequatur aliquid"
  },
  {
    "postId": 12,
    "id": 58,
    "name": "sint minus reiciendis qui perspiciatis id",
    "email": "Ezra_Abshire@lyda.us",
    "body": "veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate"
  },
  {
    "postId": 12,
    "id": 59,
    "name": "quis ducimus distinctio similique et illum minima ab libero",
    "email": "Jameson@tony.info",
    "body": "cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia"
  },
  {
    "postId": 12,
    "id": 60,
    "name": "expedita libero quos cum commodi ad",
    "email": "Americo@estrella.net",
    "body": "error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae"
  }
]

const zones=["Pacific/Midway","America/Adak","Etc/GMT+10","Pacific/Marquesas","Pacific/Gambier","America/Anchorage","America/Ensenada","Etc/GMT+8",
"America/Los_Angeles","America/Denver","America/Chihuahua","America/Dawson_Creek","America/Belize","America/Cancun","Chile/EasterIsland",
"America/Chicago","America/New_York","America/Havana","America/Bogota","America/Caracas","America/Santiago","America/La_Paz",
"Atlantic/Stanley","America/Campo_Grande","America/Goose_Bay","America/Glace_Bay","America/St_Johns","America/Araguaina",
"America/Montevideo","America/Miquelon","America/Godthab","America/Argentina/Buenos_Aires","America/Sao_Paulo","America/Noronha",
"Atlantic/Cape_Verde","Atlantic/Azores","Europe/Belfast","Europe/Dublin","Europe/Lisbon","Europe/London","Africa/Abidjan",
"Europe/Amsterdam","Europe/Belgrade","Europe/Brussels","Africa/Algiers","Africa/Windhoek","Asia/Beirut","Africa/Cairo","Asia/Gaza",
"Africa/Blantyre","Asia/Jerusalem","Europe/Minsk","Asia/Damascus","Europe/Moscow","Africa/Addis_Ababa","Asia/Tehran","Asia/Dubai",
"Asia/Yerevan","Asia/Kabul","Asia/Yekaterinburg","Asia/Tashkent","Asia/Kolkata","Asia/Katmandu","Asia/Dhaka","Asia/Novosibirsk",
"Asia/Rangoon","Asia/Bangkok","Asia/Krasnoyarsk","Asia/Hong_Kong","Asia/Irkutsk","Australia/Perth","Australia/Eucla","Asia/Tokyo",
"Asia/Seoul","Asia/Yakutsk","Australia/Adelaide","Australia/Darwin","Australia/Brisbane","Australia/Hobart","Asia/Vladivostok",
"Australia/Lord_Howe","Etc/GMT-11","Asia/Magadan","Pacific/Norfolk","Asia/Anadyr","Pacific/Auckland","Etc/GMT-12","Pacific/Chatham",
"Pacific/Tongatapu","Pacific/Kiritimati"];

const tagsArrayRef = "dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum" 

const timeZonesRandRef = [];

const timeZonesRandRef_ref = document.getElementsByTagName("option");
for(let i=0; i<timeZonesRandRef_ref.length; i++){
    timeZonesRandRef.push(timeZonesRandRef_ref[i].value);
}

function uploadRandUsers(){

if(confirm("upload 10 users")){
users.forEach((e, index) => {
    const usersFirstName = (e.name.split(" "))[0].split(".").join("");
    const usersLastName = (e.name.split(" "))[1].split(".").join("");
    const usersUsername = userComments[index].email.replace("@","S").split(".").join("_");
    const usersPassword = e.username + Math.floor(1000 + Math.random() * 9000);
    const usersPrediction =  userComments[index].body;

    const tagsArray = tagsArrayRef.split(" ").join(" #").split(" ");
    const NumOfTagsRand = Math.floor(Math.random() * 5);
    const tagsCombinedArray = [];
    for(let y=0; y<NumOfTagsRand; y++){
        const tagsRandNumber = Math.floor(1 + Math.random() * tagsArray.length);
        tagsCombinedArray.push(tagsArray[tagsRandNumber]);
    }
    const tagsFinalRand = [tagsCombinedArray.join(" "), "#" + userComments[index].name.split(" ").join(" #")]
    const usersTags = tagsFinalRand[(Math.floor(1 + Math.random() *2))-1];

    getRandDate();

    const usersTimeZone = timeZoneRand;

    var timeMinutes = Math.floor(1 + Math.random() *58);
    const timeHours = Math.floor(1 + Math.random() *22);
    if(timeMinutes<10) timeMinutes += 12; 
    
    getRandDate();
    const usersReleaseDate = b.split(", ")[0];

    const usersReleaseTime = timeHours +":"+ timeMinutes;

    const today2 = new Date();
    const UdateFormat = today2.getMonth() +"/"+ today2.getDate() +"/"+ today2.getFullYear();
    const UTimeFormat = today2.getHours() +":"+ today2.getMinutes();

    database.ref('/users/'+ "UserId: "+usersUsername+'/'+"first_name:"+usersFirstName.toLowerCase()+'/'+'last_name:'+usersLastName.toLowerCase()).update({
        pass_word: usersPassword,
        release_date: usersReleaseDate,
        release_time: usersReleaseTime,
        upload_date: UdateFormat,
        upload_time: UTimeFormat,
        prediction: usersPrediction,
        tags: usersTags,
        timezone: usersTimeZone
      });
      database.ref('/users/'+ "UserId: "+username.value+'/status').update({
        Scan: false
      });
        database.ref('/users/'+ "UserId: "+usersUsername+'/status').update({
        status: "Public"
      }); 

}); 
}
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  function getRandDate(){
 
  const randTimeZones = Math.floor(1 + Math.random() * 40);
  globalThis.timeZoneRand = zones[randTimeZones-1];
  
  const d = randomDate(new Date(Math.floor(2022 + Math.random() *3), 0, 1), new Date());
  globalThis.b = d.toLocaleString('en-US', { timeZone: timeZoneRand });
}

// fetch more random users= https://jsonplaceholder.typicode.com/comments
