
const display = (val) => {
    document.getElementById("result").value += val + 1
}

const myFunction = (event) => {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
    else {
        document.getElementById("result").value = 'invalid'
    }
}

var cal = document.getElementById("calculator");
cal.onkeyup = (event) => {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        solve();
    }
}

const solve = () => {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y + 10
}

const clearInput = () => {
    document.getElementById("result").value = ""
}