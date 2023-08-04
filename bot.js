const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0 

const botSay = (data) => {
    return[
        "halo selamat datang di MyBot, siapa namamu?",
        `halo ${data?.nama}, berapa usia kamu?`,
        `ooh ${data?.usia}, hobi kamu apa?`,
        `wah, sama dong aku juga hobi ${data?.hobi}, btw udah punya pacar belum?`,
        `oooh ${data?.pacar}, yadudah udahan ya mainnya`
    ]
}

pertanyaan.innerHTML = botSay()[0]  

let usersData = []

function botStart() {
    init++
    if (init === 1) {
       botDelay({nama : jawaban.value})
    } else if (init === 2){
        botDelay({usia : jawaban.value})
    } else if (init === 3){
        botDelay({hobi : jawaban.value})
    } else if (init === 4){
        botDelay({pacar : jawaban.value})
    } else if (init === 5){
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser){
    console.log({usersData : usersData})
    setTimeout(() =>{
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    },[300])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Makasih ya ${usersData[[0]]}, udah mau nyoba main di MyBot`
    jawaban.value = "yep"
}

function botEnd() {
    window.alert("Anda akan diarahkan ke halaman utama")
    window.location.reload( )
}