---
tags:
  - nodejs
  - scripting
created: 2024-12-04  13:53
draft: false
---
When I searched this on Perplexity, I found answers to use `concurrently` package or `npm-run-all` etc. 

I didn't want to start another rabbithole, so I quickly tried to see if there's a simpler way. And I found it after 2-3 tries myself. 

In your package.json

`"dev": "(sleep 7 && open http://localhost:8080/) & npx quartz build --serve --directory public",`

There are 2 parts to this command, both of which start simultaneously (due to &): 
1. `(sleep 7 && open http://localhost:8080/)`
	- Sleeps for 7 seconds and opens localhost. 
2. `npx quartz build --serve --directory public`
	- Starts building and serves public


I love these small hacks, even if it makes absolutely no impact whatsoever. I smile a little when it automatically does things. 


> [!abstract] Computers are magical ✨
