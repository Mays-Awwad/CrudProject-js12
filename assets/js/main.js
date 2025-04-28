const name=document.querySelector("#courseName");
const Category=document.querySelector("#category");
const price=document.querySelector("#price");
const description=document.querySelector("#courseDescription");
const capacity=document.querySelector("#courseCapacity");
const addBtn=document.querySelector("#click");
let courses=[];

if(localStorage.getItem("courses")!=null){
    courses=JSON.parse(localStorage.getItem("courses"));
    displayCourses();
}


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const course={
        name:name.value,
        Category:Category.value,
        price:price.value,
        description:description.value,
        capacity:capacity.value,
    }
    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "new course added successfully"
      });

    displayCourses();
})


function displayCourses(){
    const result=courses.map( (course,index)=>{

        return `
                 <tr>
                 <td>${index}</td>
                 <td>${course.name}</td>
                 <td>${course.Category}</td>
                 <td>${course.price}</td>
                 <td>${course.description}</td>
                 <td>${course.capacity}</td>
                 </tr>
        `
    }).join('');
    document.querySelector("#data").innerHTML=result;
}