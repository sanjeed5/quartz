---
tags:
  - "#firebase"
created: 2024-12-06  04:53
draft: false
---
Wasted a lot of time on a stupid Firebase error. 

`Error: Queue ID must start with a letter followed by up to 62 letters, numbers, hyphens, or underscores and must end with a letter or a number`

My queue ID was: `chunk_and_process_pdf`

Seems absolutely fine, right? But it wasn't working. 

But after Googling a lot, I saw that up till 2023, they were only allowing small caps and no underscores. Only in 2023 April did they start allowing underscores. So I thought, "What if they messed up something there?" 

Although in the error message it clearly said that underscore is fine, I tried removing it and rewrote it as one word (`chunkprocesspdf`) and it worked. 

Arrghhhhhh