//for some reason i can't get this file to load in the index.html......
//for now i have put it inside of the index's script just to make sure it works


$(document).ready(() => {
  $('.wolf-alice-button').on('click', () => {
    console.log('click!')
    $.ajax({
      url: 'https://api.spotify.com/v1/artists/3btzEQD6sugImIHPMRgkwV',
      headers: {'Authorization': 'Bearer ' + access_token},
      success: function(data) {
        console.log(success)
        console.log(data)},
      dataType: json
    })
  })
})

