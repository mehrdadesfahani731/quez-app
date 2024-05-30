const button=document.querySelectorAll('button');


const levelhandler=(event)=>{
  
        const level=event.target.innerText.toLowerCase();
        console.log(level)

        localStorage.setItem('level',level)
        window.location.assign('/')
    };


button.forEach(button => {
button.addEventListener('click',levelhandler)})