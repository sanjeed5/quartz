---
draft: true
created: 2020-11-21T21:29:49+04:00
---
I'll tell you why I decided to clear the playlist and an easy way to do that as well. Feel free to skip to the How if you want to.

## Why?

My YouTube Watch Later has 559 videos. I used to add anything I find remotely interesting. I wanted to know about too many things. But I never got to watching most of them. There would be times when I would just browse YouTube to add videos to the playlist. And initially my logic was that I can watch interesting stuff when I'm free. 

Clearly, I haven't been able to catch up. And over time I've realized that when consuming information, it's always better to consume longer comprehensive forms rather than smaller forms. 

i.e. books & essays over short articles and youtube videos. 

### Why Books over YouTube Videos? 
(Short detour, but worth it. *And, obviously this might hold true only for some areas.*)

1. You pick up books more intentionally than YouTube videos. 
	- Higher time cost with each book compared to a 15 min video, so we choose more carefully. 

2. Higher ROI
	- The author has to put much more effort and understanding to compress comprehensive information into a book. There could be videos were there is comparable quality, but it is usually a very small percentage due to the incentive structure creators have on YouTube - more watch time = more monies.
	- Most creators tend to stretch videos because in the end they have to optimize for more watch time. 

Going into 2021, I wanted to be more intentional in how I consume information. 
I've realized that even though I want to learn everything about everything, time is limited. 

## How to empty the playlist?

Emptying a playlist sounds simple. But sadly YouTube hasn't given us the simple option of clearing everything.
And clicking remove 559 times doesn't seem that appealing either. 

### Automation is the answer my fren

No reinventing the wheel. I found a [GitHub Gist](https://gist.github.com/astamicu/eb351ce10451f1a51b71a1287d36880f) that does what we want. 

Steps:
1. Go to this link https://www.youtube.com/playlist?list=WL&disable_polymer=true
2. Open the development console for your browser ( Ctrl+Shift+J for chrome, Ctrl+Shift+K for firefox )
3. Paste this code into the console

```
setInterval(function() { document.querySelector('#primary button[aria-label="Action menu"]').click(); var things = document.evaluate('//span[contains(text(),"Watch later")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); for (var i = 0; i < things.snapshotLength; i++) { things.snapshotItem(i).click(); } }, 1000);
```

4. Press the enter key
5. Watch your watch later playlist empty in realtime xD

This worked well for me, and it was a delight watching it go down to zero. 

In case the code above doesn't work, go to the [GitHub Gist](https://gist.github.com/astamicu/eb351ce10451f1a51b71a1287d36880f) and see if there are any new comments. 


In this age of information overload, let's try to be mindful about the content we consume. Clearing the Watch Later playlist was one of the first steps for me. I plan to add videos only if I am definitely going to watch them and I would keep a limit on the maximum number of videos it can have. 

It should only take you around 40 seconds to open the tabs and run the code. So go do it!

Next, I'll write another YouTube Hack to support us for mindful consumption. 

If you found this post interesting, I’d be very grateful if you’d help it spread by sharing it to a friend, or sharing it on WhatsApp Twitter or Facebook. Thank you!








