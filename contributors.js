let table = document.getElementById("counthere");

function renderavatar_urlTable(avatar_url) {
  let i = 1;
  avatar_url.forEach(({ login, html_url, avatar_url }) => {
    let row = table.insertRow(i);
    let slNoCell = row.insertCell(0);
    let userNameCell = row.insertCell(1);
    let urlUser = row.insertCell(2);
    let noOfavatar_url = row.insertCell(3);
    slNoCell.innerText = i;
    userNameCell.innerText = login;
    urlUser.innerHTML = `<a href="${html_url}">${html_url}</a>`;
    noOfavatar_url.innerText = avatar_url;
    i++;
  });
  document.getElementById("Ava").innerHTML = i - 1 + " avatar_url";
}

fetch("https://api.github.com/users/Ttvpoopooumgood")
  .then((response) => response.json())
  .then((avatar_url) => renderavatar_urlTable(avatar_url))
  .catch((err) => console.log("Request Failed", err));