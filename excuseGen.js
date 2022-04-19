let excuseGen = () => {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    random_who=who[Math.floor(Math.random()*4)]
    random_action=action[Math.floor(Math.random()*4)]
    random_what=what[Math.floor(Math.random()*3)]
    random_when=when[Math.floor(Math.random()*5)]

    let escusa = `${random_who} ${random_action} ${random_what} ${random_when}`

    return escusa
}

window.onload = function() {
    document.getElementById("escusaHTML").innerHTML = excuseGen();        
}