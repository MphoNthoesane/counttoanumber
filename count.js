
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
        
        
        setTimeout(nako,3000)
        function nako(){
            button.innerHTML = count
            button.style.backgroundColor = "#27f24c"
        }
        if(count>number){
            all.innerHTML = "Done"
        }
    
    }
        
}
