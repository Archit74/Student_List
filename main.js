var name_Of_The_Student=[];
function submit_name(){
var display_Student_Array=[];
    for (var j=1;j<=4; j++) {
       var element = document.getElementById("input_"+j).value;
       name_Of_The_Student.push(element);
    } 
    var length1= name_Of_The_Student.length; 
    for (var k = 0; k < length1; k++) {
        display_Student_Array.push("<h4>name- "+ name_Of_The_Student[k] + "</h4 >"); console.log(display_Student_Array); }
document.getElementById("Div1").innerHTML= display_Student_Array;
var remove_comma=display_Student_Array.join(" ");
document.getElementById("Div2").innerHTML=remove_comma;
}    
   function sort_name(){
     var sort_array=[]; 
      name_Of_The_Student.sort();
      for (var k=0;k<=3;k++) {
      sort_array.push("<h4>name- "+ name_Of_The_Student[k] + "</h4>");
      console.log(sort_array);   
      }
      document.getElementById("Div2").innerHTML= sort_array;
   }
