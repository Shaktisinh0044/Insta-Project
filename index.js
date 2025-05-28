var arr = [
  { dp: "https://images.unsplash.com/photo-1598507619174-04d674f7fb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    img: "https://plus.unsplash.com/premium_photo-1664351560745-a14ed7bfee3d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  { dp: "https://plus.unsplash.com/premium_photo-1664368368902-a0cc58a3a6c6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    img: "https://plus.unsplash.com/premium_photo-1664378762519-4fe603b32e07?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  { dp: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    img: "https://images.unsplash.com/photo-1547976705-2b3313d73728?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]
var clutter =""

arr.forEach(function(elem,idx){
  clutter += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})

document.querySelector("#storiya").innerHTML = clutter
var grow = 0

document.querySelector("#storiya").addEventListener("click",function(dets){
  document.querySelector("#full").style.display="block"
  document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].img})`

  setTimeout(function(){
    document.querySelector("#full").style.display='none'
  },3000)

  if(grow<100){
     setInterval(function(){
        document.querySelector("#growth").style.width = `${grow++}%`
      },30)
  }else{
    grow = 0
  }
})

