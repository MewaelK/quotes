$(document).ready(function() {
  
  var quote;
  var author;
  
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp',
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quote").text('"' + quote +'"');
        if (author) {
          $("#author").text("- " + author);
        } else {
          $("#author").text("- Unknown");
        }
      },
      error: function(res){
        console.log("error - fail")
      }
    });
  } 
  getNewQuote();
  
  $('.getQuote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });
 
   $(".tweet").click(function() {
      var tweet = 'https://\ttwitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -' + author);
      $('.tweet').attr('href', tweet);
   });
});
