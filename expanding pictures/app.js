const panels = document.querySelectorAll('.panel');
document.querySelector('#btn').addEventListener('click', refresh)
panels.forEach(function(panel){
  console.log(panel)
  panel.addEventListener('click', function() {
    removeActiveClasses();
    panel.classList.add('active');
  })
}) 
function removeActiveClasses() {
  panels.forEach(function(panel) {
    panel.classList.remove('active');
  })
}
// Reload The Page
function refresh(e){
  window.location.reload();
}


