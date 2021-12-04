const pass_button = document.getElementById("pass_button")

pass_button.addEventListener("click", () => {
    const pass_inputbox = document.getElementById("pass_input").value

    if (pass_inputbox == "abc123")
    {
        console.log("Good")
    }
    else
    {
        console.log("Bad")
        alert(pass_inputbox)
    }
})