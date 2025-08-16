
function update_expression(element){
    let c_expression=document.getElementById("input").value;
    if (c_expression=="   Syntax error"){
      c_expression="";
    }
    let expression=c_expression+element;
    document.getElementById("input").value=expression;
}
function evaluate_exp(){
  const input = document.getElementById("input");
  const display = document.getElementById("display");
  try {
    let result = eval(input.value);
    if (result==Infinity || result== -Infinity || isNaN(result)){
      input.value = "   Syntax error";
    }else{
      display.value ="="+result;
    }
    
    
  } catch {
    input.value = "   Syntax error";
  }
}
function clear_(){
  const input = document.getElementById("input");
  const display = document.getElementById("display");

  try {
    display.value="";
    input.value="";
  } catch {
    
  }
    
}
function x(){
  const input=document.getElementById("input");
  let expression=input.value;
  if(expression=="   Syntax error"){
    input.value="";
  }else{
    expression=expression.substring(0,expression.length-1);
    input.value=expression; 
  }
  
}
function sin(x){
  ans=Math.sin(x*Math.PI/180);
  return ans
}
function tan(x){
  ans=Math.tan(x*Math.PI/180);
  return ans;
}
function cos(x){
  ans=Math.cos(x*Math.PI/180);
  return ans;
}
function log(x){
  ans=Math.log10(x);
  return ans;
}
function π(){
  ans=Math.PI;
  return ans;
}
function ln(x){
  ans=Math.log(x);
}
function power() {
    const input = document.getElementById('input');
    const btn = document.getElementById('power');

    if (input.disabled) {
      input.disabled =false;
      btn.textContent ="OFF";
      input.value = "";
    } else {
      input.disabled = true;
      btn.textContent = "ON";
      input.value = "";
    }
   
}

