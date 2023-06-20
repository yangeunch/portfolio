const body = document.querySelectorAll('body')
let img1 = document.querySelectorAll('img')
const sns = document.querySelectorAll('.detal_container a')
const detail_container = document.querySelector('.santa')

sns.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        img1.src = `./images/상세페이지${i+1}.jpg`
        santa.style.display = 'block'
        santa.children[0].appendChild(imgC)
        santa.style.scrollTo = 'none'
        console.log(this)
        img1.parentElement.scrollTo(0,0)
        body[0].style.overflow = 'hidden'

        // document.querySelectorAll('body')[0].style.overflow = 'hidden'; // 배경스크롤 막아주는 기능
        // big_img.parentNode.scrollTo(0,0)
    })
})