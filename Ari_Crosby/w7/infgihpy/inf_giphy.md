# 1. rails crud

Make a rails CRUD app in rails for mangaing planets.




# 2. Infinite Giphy

When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.

When the user scrolls near to the bottom of the page, make another serach request and
load an additional 25 gifs. And keep going!

"Powered By Giphy"

host:
api.giphy.com

api_key - The public beta key is "dc6zaTOxFJmzC"

http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  

- how to add the next 10 results to the div, on scroll to bottom? even listener?
- grabs the search JSON, and keeps it, but only displays more when scrolling to the bottom.

on giphys site search for 'LOL'

http://giphy.com/search/lol/6?is=1&json=true

the # 6 is how many times the search has run, it runs again when I scroll to the bottom.

pagination : {next_url: "/search/lol/7"}
next_url : "/search/lol/7"
search_term : "lol"
ua : ""
urlPath : "/search/lol/6"

Seems to be showing what search 'page' to add next to the same div, when I scroll to the bottom.

25 gifs per page.
_

First scroll to bottom:
Request URL:http://giphy.com/search/its-always-sunny/2?is=1&json=true

window scroll, once the scroll bar is at the bottom, where the window is, then call my
load next results.
```
if ($(window).scrollTop() + $(window).height() >=
    $('.CONTAINER').offset().top + $('.CONTAINER').height() ) {
 .. my ajax here
}
```

use the offset, to grab results after the current amount, say 10, then make the offset 11
and increment the offset each time you grab more results.
