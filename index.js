const form=document.querySelector("form");form.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("exampleInputheight").value,n=document.getElementById("exampleInputweight").value,l=document.getElementById("result");if(""===t||t<0||isNaN(t))l.innerHTML=`Please enter a valid Height ${t}`;else if(""===n||n<0||isNaN(n))l.innerHTML=`Please enter a valid Weight ${n}`;else{let a=(n/(t*t/1e4)).toFixed(2);l.innerHTML=`<span">Your Body Mass Index (BMI) = ${a}</span>`}});