var employees=
[
  {
   emp_id:"cap101",
   emp_name:'AnshumanKr',
   emp_photo:"https://cdn.pixabay.com/photo/2016/11/21/14/53/adult-1845814_960_720.jpg",
   emp_age:22,
   emp_gender:"male",
   emp_company:'wayne Enterprises',
   emp_salary:50000,
   emp_designation:'nodejs developer',
  
   emp_location:"miami",
   emp_edu:"B.tech"
  },
  {
    emp_id:"cap102",
    emp_name:'Shubham@ce',
    emp_photo:"https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg",
    emp_age:20,
    emp_gender:"male",
    emp_company:'qspiders',
    emp_salary:30000,
    emp_designation:'software developer',
  
    emp_location:"los vegas",
    emp_edu:"B.tech"
  },
 {
    emp_id:"cap103",
    emp_name:'Mayank@makwar',
    emp_photo:"https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg",
    emp_age:20,
    emp_gender:"male",
    emp_company:'CoC',
    emp_salary:30000,
    emp_designation:'townhall developer',
    
    emp_location:"washington",
    emp_edu:"B.tech"
  },
  {
    emp_id:"cap104",
    emp_name:'Shibu',
    emp_photo:"https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883_960_720.jpg",
    emp_age:20,
    emp_gender:"male",
    emp_company:'CyberDyne',
    emp_salary:30000,
    emp_designation:'AI developer',
    
    emp_location:"miami",
    emp_edu:"B.tech"
  },
  {
    emp_id:"cap105",
    emp_name:'Alok',
    emp_photo:"https://cdn.pixabay.com/photo/2012/04/12/23/56/skull-31060_960_720.png",
    emp_age:20,
    emp_gender:"male",
    emp_company:'Opentext',
    emp_salary:150000,
    emp_designation:'EDI',
    
    emp_location:"new york",
    emp_edu:"B.tech"
  }
];
var emp1=[];
function loadprofile()
{
    var Emp_ID = document.getElementById("Emp_ID").value;
    var Emp_name = document.getElementById("Emp_name").value;
    var displayid=[];
    displayid=searchblock();
    console.log(employees[3].emp_id);
   function searchblock(){
     for (var i=0;i<employees.length;i++)
    {
      if(Emp_ID==employees[i].emp_id && Emp_name==employees[i].emp_name)
      {
        emp1.push(`
        <div class="card1" style="width: 18rem;">
      <img src="${employees[i].emp_photo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${employees[i].emp_name}</h5>
        <span class="badge badge-success float-left">${employees[i].emp_id}</span>
        
        <span class="badge badge-primary float-left">${employees[i].emp_designation}</span><br>
        <li class="list-group-item"> Salary:${employees[i].emp_salary}</li>
        <li class="list-group-item">Loacation:${employees[i].emp_location}</li>
        <li class="list-group-item">education:${employees[i].emp_edu}</li>
        <li class="list-group-item">Age:${employees[i].emp_age}</li>
        <li class="list-group-item">Company:${employees[i].emp_company}</li>
        <li class="list-group-item"> Gender👨:${employees[i].emp_gender}</li>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`);
        document.getElementById('car').innerHTML=emp1;
        console.log(employees[i]);
      } 
    }
  };    
};
function Clock(){
  setInterval(function (){
      var date=new Date();
      var hour=date.getHours();
      var min=date.getMinutes();
      var seconds=date.getSeconds();
      var time=`<h1>${hour}:${min}:${seconds}</h1>`;
      document.getElementById("template").innerHTML=time;
  },);
}
Clock();

  

  
