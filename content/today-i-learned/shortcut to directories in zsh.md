---
tags:
  - "#code"
  - cli
  - "#TIL"
created: 2024-12-04  02:26
draft: false
---
`hash -d mydir=/path/to/long/path/annoyingly/long`

and then voila `cd ~mydir` works 

---
add it to your `.zshrc` so that it works in new terminal:
`echo 'hash -d mydir=/path/to/long/path/annoyingly/long' >> ~/.zshrc && source ~/.zshrc`

