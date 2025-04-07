const infoLegends = [
    {name: "Lucas Montano", desc: "Escrevendo código desde 2002, atualmente trabalho como Lead Engineer no Disney+ e falo sobre o que quero no Youtube.", img: "./assets/videos/lucasmontano.mp4", link: "https://youtube.com/@LucasMontano"},
    {name: "Mano Deyvin", desc: "👑 O rei do chorume da bolha tech", img: "./assets/videos/deyvin.mp4", link: "https://youtube.com/@manodeyvin"},
    {name: "Filipe Deschamps", desc: "Vou fazer você se apaixonar por programação! Meu último emprego antes de decidir focar 100% no YouTube foi ser CTO do Pagar.me. Lá tive o prazer de ser responsável por um time com mais de 100 pessoas e aprendi MUITO sobre gestão (principalmente gestão de times grandes) e sobre como lidar com tecnologia em escala. Ambos conhecimentos que quero compartilhar nesse canal.", img: "./assets/videos/filipedeschamps.mp4", link: "https://youtube.com/@FilipeDeschamps"},
    {name: "Jovem Tranquilão", desc: "Tecnologia, carros, rock, games, liberdade e tranquilidade!", img: "./assets/videos/jovemtranquilão.mp4", link: "https://youtube.com/@JovemTranquilão"},
    {name: "Fabio Akita", desc: "Eu curto assuntos geek, otaku, novas tecnologias e quero trazer um pouco disso para cá.", img: "./assets/videos/fabioakita.mp4", link: "https://youtube.com/@Akitando"},
    {name: "Diego Fernandes", desc: "Entusiasta das melhores tecnologias de desenvolvimento web e móvel. Apaixonado por educação e por mudar a vida das pessoas por meio da programação. Mais de 200.000 pessoas já passaram por um de meus treinamentos.", img: "./assets/videos/diegofernandes.mp4", link: "https://youtube.com/@RocketSeat"},
    {name: "Gustavo Guanabara", desc: "Nerd por natureza. Professor por vocação. Estou aqui para compartilhar conteúdos para iniciantes em Tecnologia", img: "./assets/videos/gustavoguanabara.mp4", link: "https://www.youtube.com/c/CursoemV%C3%ADdeo"},
    {name: "Bero Dev", desc: "Eu falo de programação, mas não levem nada a sério ", img: "./assets/videos/berodev.mp4", link: "https://youtube.com/@meunomeebero"},
] 


var nameLegends = document.querySelector("#name")
var descLegends = document.querySelector("#desc")
var videoLegends = document.querySelector("#videoBanner")
var videoControl = document.querySelector(".videoBox")

nameLegends.textContent = infoLegends[0].name
descLegends.textContent = infoLegends[0].desc

videoLegends.setAttribute('src', infoLegends[0].img)
videoControl.load()

var currentLink = ""


function redirectTo() {
    window.open(currentLink)
}

// function to select
function selectLegends(e) {
    e.preventDefault()

    document.querySelectorAll('.containerIc').forEach(el => {
        el.setAttribute('id', 'ic_normal')
    })
    
    e.currentTarget.setAttribute("id", "ic_after")

    const id = e.currentTarget.getAttribute("data-id")

    currentLink = infoLegends[id].link

    nameLegends.textContent = infoLegends[id].name
    descLegends.textContent = infoLegends[id].desc
    videoLegends.setAttribute('src', infoLegends[id].img)
    videoControl.load()
}


window.selectLegends = selectLegends
window.redirectTo = redirectTo