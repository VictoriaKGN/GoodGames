var expanded = false;

function showConsoleSelect() 
{
  var checkboxes = document.getElementById("consoleCheckBoxes");
  if (!expanded) 
  {
    checkboxes.style.display = "block";
    expanded = true;
  } 
  else
  {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showTagsSelect()
{
  var checkboxes = document.getElementById("tagCheckBoxes");
  if (!expanded) 
  {
    checkboxes.style.display = "block";
    expanded = true;
  } 
  else
  {
    checkboxes.style.display = "none";
    expanded = false;
  }
}