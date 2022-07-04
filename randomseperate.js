const number_of_member = document.querySelector(".numofmem");
const number_of_member_in_group = document.querySelector(".numofmemin");
const member_name = document.querySelector(".membername");
const set = document.querySelector(".set");
const data = document.querySelector(".data");
const ans = document.querySelector(".ans");
const ans2 = document.querySelector(".ans2");
function Counter(name_list, name) {
  let count = 0;
  for (let i of name_list) {
    if (i == name) {
      count += 1;
    }
  }
  console.log(count);
}
function arrayRemove(arr, value) {
  return arr.filter(function (geeks) {
    return geeks != value;
  });
}
member_name.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    data.innerHTML += `<li class = "names_list">${member_name.value}</li>`;
    member_name.value = "";
  }
});
let list = [];
set.addEventListener("click", () => {
  ans.style.padding = "30px";
  
  console.log(number_of_member.value, number_of_member_in_group.value);
  for (let i of data.children) {
    list.push(i.innerHTML);
  }
  console.log(list);
  let team = [];
  for (let i = 0; i < list.length; i++) {
    team.push(list[Math.floor(Math.random() * list.length)]);
  }
  let new_team = [];
  for (let y of team) {
    if (new_team.includes(y) == false) {
      new_team.push(y);
    }
  }
  for (let x of list) {
    if (new_team.includes(x) == false) {
      new_team.push(x);
    }
  }
  console.log(new_team);
  let result_team = [];
  for (
    let member = 0;
    member < parseInt(list.length / number_of_member_in_group.value);
    member++
  ) {
    result_team.push([]);
    for (
      let i = number_of_member_in_group.value * member;
      i <
      number_of_member_in_group.value * member +
        number_of_member_in_group.value;
      i++
    ) {
      result_team[member].push(new_team[i]);
    }
  }
  console.log(result_team);
  for (let i = 0; i < result_team.length; i++) {
    ans2.innerHTML += `<div class="my"><small><strong style="font-size:15px">group${i+1}</strong></small><ol class = "aa">
    </ol></div>`;
  }
  console.log(ans);

  for (let i = 0; i < ans2.children.length; i++) {
    for (let x = 0; x < number_of_member_in_group.value; x++) {
      ans2.children[i].innerHTML += `<li>${result_team[i][x]}</li>`;
    }
  }
  console.log(result_team);
});
