
window.onload = () =>{
    
    const demoBtn = document.createElement("button");
 
    demoBtn.innerText = "Click Me!";
    demoBtn.onclick = () =>{
        alert("you've pressed a button");
    }

    document.body.appendChild(demoBtn);

}