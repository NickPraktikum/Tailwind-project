let nav = document.querySelectorAll('.mynav')
const navToggle = document.querySelector('.navToggle')
const navBtn = document.querySelector('.btnNav')
const btnReview = document.querySelector('.btn')
const arrow = document.querySelector('.arrow')
const btnReview1 = document.querySelector('.btn1')
const arrow1 = document.querySelector('.arrow1')
const btnsScroll = document.querySelectorAll('.btnsScroll')
const reviews = document.querySelectorAll('.review')
const firstBlock = document.querySelector('.first')
const lastBlock = reviews[reviews.length-1]
const firstBtn = document.querySelector('.firstBtn')
const lastBtn = document.querySelector('.lastBtn')


btnsScroll.forEach((v,i)=>{
  v.addEventListener('click', function(){
    console.log(reviews[i])
      setTimeout(function () {
        reviews[i+1].scrollIntoView({ inline:'center' })}, 100);
    let a = Array.from(btnsScroll).find((v)=>{return v.classList.contains('activeBtn')})
    a.classList.remove('activeBtn')
    a.classList.add('circleBtn')
    v.classList.add('activeBtn')
    v.classList.remove('circleBtn')
  })
})

btnReview.addEventListener('mouseover', function(){
  arrow.classList.remove('text-red-500')
  arrow.classList.add('text-white')
})
btnReview.addEventListener('mouseout', function(){
  arrow.classList.remove('text-white')
  arrow.classList.add('text-red-500')
})

btnReview1.addEventListener('mouseover', function(){
  arrow1.classList.add('text-red-500')
  arrow1.classList.remove('text-white')
})
btnReview1.addEventListener('mouseout', function(){
  arrow1.classList.add('text-white')
  arrow1.classList.remove('text-red-500')
})


btnReview1.addEventListener('click', function(){
  let a = Array.from(btnsScroll).find((v)=>{return v.classList.contains('activeBtn')})
  a.classList.remove('activeBtn')
  a.classList.add('circleBtn')
  lastBtn.classList.add('activeBtn')
  lastBtn.classList.remove('circleBtn')
  console.log(2)
  lastBlock.scrollIntoView({ inline:'center' })
})
btnReview.addEventListener('click', function(){
  let a = Array.from(btnsScroll).find((v)=>{return v.classList.contains('activeBtn')})
  a.classList.remove('activeBtn')
  a.classList.add('circleBtn')
  firstBtn.classList.add('activeBtn')
  firstBtn.classList.remove('circleBtn')
  firstBlock.scrollIntoView({ inline:'center' })
})


if(!navBtn.classList.contains('hidden')){
    navBtn.addEventListener('click', function(){
        if(navToggle.classList.contains('hidden')){
            navToggle.classList.remove('hidden')
        }else{
            navToggle.classList.add('hidden')
        }
    })
}




if (nav) {
  let navLinks = document.querySelectorAll('nav a')
  let activeLink = document.querySelector('.active')
  activeLink.scrollIntoView({ behavior: "smooth", inline: "center" })
  
  navLinks.forEach( function(link) {
    link.addEventListener("click", (event) => {
      navLinks.forEach( function(link) {
        link.classList.remove('active')
      })
      link.classList.add('active')
      link.scrollIntoView({ behavior: "smooth", inline: "center" })
    })
  })
}