---
tags:
  - "#code"
  - cli
  - "#TIL"
created: 2024-12-04  02:26
draft: false
title: How to add shortcut to directories in zsh
---
`hash -d mydir=/path/to/long/path/annoyingly/long`

and then voila `cd ~mydir` works 

---
add it to your `.zshrc` so that it works in new terminal:
`echo 'hash -d mydir=/path/to/long/path/annoyingly/long' >> ~/.zshrc && source ~/.zshrc`

