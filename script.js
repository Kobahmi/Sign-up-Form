const pwd = document.querySelector("#password")
const confirmPwd = document.querySelector("#confirmpassword")

function passwordMatch() {
    if (pwd !== confirmPwd) {
        alert("Passwords do not match!")
        return
    }
}