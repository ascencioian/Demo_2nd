// deletes saved Bookmark's
var trash = document.getElementsByClassName("bi-trash-fill");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        let name = this.parentNode.parentNode.childNodes[1].innerText
        let address = this.parentNode.parentNode.childNodes[3].innerText
        
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'address': address
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
