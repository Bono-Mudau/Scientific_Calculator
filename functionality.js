
function update_expression(element){
  try {
    let c_expression=document.getElementById("input").value;
    if (c_expression=="   Syntax error"){
      c_expression="";
    }
    let expression=c_expression+element;
    document.getElementById("input").value=expression;
  } catch (error) {
    console.log(""+error);
  }
    
}
function evaluate_exp(){
  const input = document.getElementById("input");
  const display = document.getElementById("display");
  try {
    let result=input.value;
    if(result.includes("cos⁻¹")){
      result=result.replace(/cos⁻¹/g,"arccos");
    }
    if(result.includes("ln")){
      result=result.replace(/ln/g, "ln");

    } 
    if(result.includes("sin⁻¹")){
      result=result.replace(/sin⁻¹/g,"arcsin");
    }
    if(result.includes("tan⁻¹")){
      result=result.replace(/tan⁻¹/g,"arctan");
    }
    if(result.includes("!")){
      result= result.replace(/(\d+)!/g, "factorial($1)");
    }
    

    if(result.includes("π")){
      result=result.replace(/π/g,π().toString());
    }
    result = eval(result);
    if (result==Infinity || result== -Infinity || isNaN(result)){
      input.value = "   Syntax error";
    }else{
      display.value ="="+result;
    }
  } catch(error) {
    input.value = "   Syntax error";
    console.log(error);
    
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
  return parseFloat(ans.toFixed(2));
}
function arcsin(x){
  ans=Math.asin(x)*(180/Math.PI);
  return parseFloat(ans.toFixed(2));
}
function tan(x){
  ans=Math.tan(x*Math.PI/180);
  return parseFloat(ans.toFixed(2));
}
function arctan(x){
  ans=Math.atan(x)*(180/Math.PI);
  return parseFloat(ans.toFixed(2));
}
function cos(x){
  ans=Math.cos(x*Math.PI/180);
  return parseFloat(ans.toFixed(2));
}
function arccos(x){
  ans=Math.acos(x)*(180/Math.PI);
  return parseFloat(ans.toFixed(2));
}
function log(x){
  ans=Math.log10(x);
  return parseFloat(ans.toFixed(2));
}
function π(){
  ans=Math.PI;
  return ans;
}
function ln(x){
  ans=Math.log(x);
  return parseFloat(ans.toFixed(2));
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

function changepanel(){
  const t_panel=document.getElementById("trig_frame");
  const n_panel=document.getElementById("buttons_frame");
  const btn=document.getElementById("changepanel");
  
    if(n_panel.style.display!=="none"){
      n_panel.style.display="none";
      t_panel.style.display="grid";
    }
    else{
      n_panel.style.display="grid";
      t_panel.style.display="none";

    }  

}
function factorial(n) {
    if (n < 0) return NaN; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


