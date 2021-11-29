var heartsUp = document.getElementsByClassName("fa-heart");
var trash = document.getElementsByClassName("bi-trash-fill");
var bookmark = document.getElementsByClassName("bookmarkButton");




Array.from(heartsUp).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(this.parentNode.parentNode.childNodes)

        const postId = this.parentNode.parentNode.childNodes[11].innerText
        const likes =  parseInt(this.parentNode.parentNode.childNodes[9].innerText)
       

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'postId': postId,
            'likes' : likes
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

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
