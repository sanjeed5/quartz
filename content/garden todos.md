---
title: garden todos
tags: 
created: 2024-12-02  01:04
modified: 2024-12-02  01:08
draft: true
---

- [ ] Add recent notes - https://quartz.jzhao.xyz/features/recent-notes
- [ ] add a random page button
- [ ] add a nownownow page
- [ ] Add some webrings - 
	- [ ] geekring like [here](https://localghost.dev/)https://geekring.net/
	- [ ] More here: https://denmchenry.com/
- [ ] Add visitor count total and on each page - https://sanjeed.goatcounter.com/help/visitor-counter
- [ ] Add npx linkinator --recurse --silent http://localhost:8080


# All Tasks from Blog
```dataview
TASK
FROM "public"
```

# Drafts
```dataview
TABLE file.cday
FROM "public"
WHERE draft
SORT file.cday desc
```

# All Published
```dataview
TABLE file.mday, file.cday, file.tags, file.path
FROM "public"
WHERE !draft
SORT file.mtime desc
```


# Compliments for the garden

![[Ronan feedback about site.png]]