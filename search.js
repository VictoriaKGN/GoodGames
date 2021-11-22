function clickedSearch()
{
  const search = document.getElementById("searchBar").value;
  sessionStorage.setItem("name", search);

  checkedBoxes();
}

function checkedBoxes()
{
  var consoles = "";

  for (let i = 1; i <= 10; i++)
  {
    let cb1 = document.getElementById(i.toString());

    if (cb1.checked)
      consoles += cb1.value + ","
  }

  sessionStorage.setItem("consoles", consoles);

  var tags = "";

  for (let i = 11; i <= 22; i++)
  {
    let cb2 = document.getElementById(i.toString());

    if (cb2.checked)
      tags += cb2.value + ","
  }

  sessionStorage.setItem("tags", tags);
}