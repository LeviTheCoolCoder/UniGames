const pass_button = document.getElementById("pass_button")

pass_button.addEventListener("click", () => {
    const pass_inputbox = document.getElementById("pass_input").value

    const hashed_pass = "a9f6c1ab30610ab70b21d1a3cdc6f001"
    let hashed_inputbox = md5(pass_inputbox)

    if (hashed_inputbox == hashed_pass)
    {
        console.log("Good")
    }
    else
    {
        console.log("Bad")
        alert(hashed_inputbox)
    }
})