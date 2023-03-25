

let Crp = () => {
    let i: number
    let m: string = ""
    let x = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>
    let cdiv = document.getElementById("cdiv") as HTMLDivElement
    let val: string = x[0].value
    for (i = 0; i < val.length; i++) {
        let r: number = Math.round(Math.random() * 7) + 2
        m = `${m+(val.charCodeAt(i).toString(r)) + r } `
    
    }

    m= m.slice(0,m.length - 1 )
    x[3].value = m
    cdiv?.classList.remove("d-none")
    window.scrollTo(0, 900)
}
let Dec = () => { 
    let cdiv = document.getElementById("cdiv") as HTMLDivElement
    let x = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>
    let y = x[0].value.split(" ")
    let m =""
    for (let i: number = 0; i < y.length; i++) { 
        let t = y[i]
        let g = t.slice(0,t.length - 1)
        let r = t[t.length - 1]
        m = m +  String.fromCharCode(parseInt(g,Number(r)))
    }

    x[3].value = m
    cdiv?.classList.remove("d-none")
    window.scrollTo(0, 900)
}

export { Crp, Dec }









  