const pwd = document.querySelector(".pwd");
const checkBtn = document.querySelector(".check");
const result = document.querySelector(".result");

checkBtn.disabled = true;

pwd.addEventListener("input", () => {
  let pwdValue = pwd.value;
  //console.log(pwdValue);
  if (pwdValue.length < 10) {
    pwd.style.border = " 4px solid red ";
    checkBtn.disabled = true;
  } else {
    pwd.style.border = " 4px solid green ";
    checkBtn.disabled = false;
  }
});

checkBtn.addEventListener("click", () => {
  let pwdValue = pwd.value;

  if (pwdValue.length < 10) {
    checkBtn.disabled = true;
  } else {
    result.innerHTML = "Successful!!!";
    result.style.color = " green ";
    result.style.fontSize = "24px";
  }
});

//https://vevw8b.csb.app/
