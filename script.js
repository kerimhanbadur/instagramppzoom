function getPhoto(a) {
  
    // validation for instagram usernames
    var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
    var validation = regex.test(a);
    if(validation) {
    
      $.get("https://www.instagram.com/"+a+"/?__a=1")
      .done(function(data) { 
  
        // getting info
        var username = data["graphql"]["user"]["username"];
        var nameSurname = data["graphql"]["user"]["full_name"];
        var biography = data["graphql"]["user"]["biography"];
        var followersCount = data["graphql"]["user"]["edge_followed_by"]["count"];
        var followingCount = data["graphql"]["user"]["edge_follow"]["count"];
        var postCount = data["graphql"]["user"]["edge_owner_to_timeline_media"]["count"];
        var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
  
        // update element
        $(".username").text(username);
        $(".name-surname").text(nameSurname);
        $(".biography").text(biography);
        $(".followers").text(followersCount);
        $(".following").text(followingCount);
        $(".post").text(postCount);
        $("#photoReturn").attr("src",photoURL);
        $("#photoReturnURL").attr("href", photoURL);
        document.getElementById("photo-info").style.display = "block";
        document.getElementById("list").style.display = "block";
        document.getElementById("photoReturn").style.display = "inline-block";
       })

      .fail(function() { 
        alert('Kullanıcı Adı Mevcut Değil.')
      })
    
    } else {
    
      alert('Kullanıcı Adı Geçersiz.')
    }
  
  }
