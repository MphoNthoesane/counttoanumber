
let number = 0
let count = 1
let button = document.getElementById("next")
let all = document.getElementById("all")
let screen = document.getElementById("screen")
let user = document.getElementById("user")
let work = document.getElementById("work")


document.getElementById("done").onclick =  function(){
    user.style.visibility = "hidden"
    work.style.visibility = "visible"

    number = document.getElementById("number").value
    screen.innerHTML = number
    button.innerHTML = 1
    document.getElementById("next").onclick =  function(){
        count++
        if(count>1){
            button.style.backgroundColor = "#f2c718"
            button.style.transform = 'scale(1.5)'
        }
        
        setTimeout(nako,500)
        function nako(){
            button.innerHTML = count
            button.style.backgroundColor = "#27f24c"
            button.style.transform = 'scale(1)'

        }
        if(count>number){
            all.style.fontSize = "300px"
            all.innerHTML = "Done"
        }
    
    }
        
}

