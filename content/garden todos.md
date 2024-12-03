---
title: garden todos
tags: 
created: 2024-12-02  01:04
modified: 2024-12-02  01:08
draft: true
---

- [ ] add a random page button
- [ ] add a nownownow page

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
SORT file.cday asc
```

# All Published
```dataview
TABLE file.mday, file.cday, file.tags
FROM "public"
WHERE !draft
SORT file.mday desc
```


# Deploy Logs

### [[2024-12-03]]



> @jackyzha0/quartz@4.4.0 deploy
> rsync -av --delete ../jarvis-obsidianvault/public/ content/ && npx quartz build && wrangler pages deploy public && open https://sanjeed.in/

building file list ... done
garden todos.md

sent 1252 bytes  received 42 bytes  2588.00 bytes/sec
total size is 291332  speedup is 225.14

 Quartz v4.4.0 

Cleaned output directory `public` in 8ms
Found 12 input files from `content` in 9ms
Parsed 12 Markdown files in 205ms
Filtered out 3 files in 49μs
Emitted 30 files to `public` in 315ms
Done processing 12 files in 539ms
 ▲ [WARNING] sass warning: 16 repetitive deprecation warnings omitted.
Run in verbose mode to see all warnings. [plugin sass-plugin]

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:8:19:
      8 │ import styles from "../../styles/custom.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:9:25:
      9 │ import popoverStyle from "../../components/styles/popover.scss"
        ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:9:25:
      9 │ import popoverStyle from "../../components/styles/popover.scss"
        ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:9:25:
      9 │ import popoverStyle from "../../components/styles/popover.scss"
        ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:9:25:
      9 │ import popoverStyle from "../../components/styles/popover.scss"
        ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/plugins/emitters/componentResources.ts:9:25:
      9 │ import popoverStyle from "../../components/styles/popover.scss"
        ╵                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Explorer.tsx:2:26:
      2 │ import explorerStyle from "./styles/explorer.scss"
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Explorer.tsx:2:26:
      2 │ import explorerStyle from "./styles/explorer.scss"
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Explorer.tsx:2:26:
      2 │ import explorerStyle from "./styles/explorer.scss"
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Explorer.tsx:2:26:
      2 │ import explorerStyle from "./styles/explorer.scss"
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Explorer.tsx:2:26:
      2 │ import explorerStyle from "./styles/explorer.scss"
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Graph.tsx:4:18:
      4 │ import style from "./styles/graph.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Graph.tsx:4:18:
      4 │ import style from "./styles/graph.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Graph.tsx:4:18:
      4 │ import style from "./styles/graph.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Graph.tsx:4:18:
      4 │ import style from "./styles/graph.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Graph.tsx:4:18:
      4 │ import style from "./styles/graph.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Backlinks.tsx:2:18:
      2 │ import style from "./styles/backlinks.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Backlinks.tsx:2:18:
      2 │ import style from "./styles/backlinks.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Backlinks.tsx:2:18:
      2 │ import style from "./styles/backlinks.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Backlinks.tsx:2:18:
      2 │ import style from "./styles/backlinks.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Backlinks.tsx:2:18:
      2 │ import style from "./styles/backlinks.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/TableOfContents.tsx:3:24:
      3 │ import modernStyle from "./styles/toc.scss"
        ╵                         ~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/pages/FolderContent.tsx:4:18:
      4 │ import style from "../styles/listPage.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:12:24:
      12 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Search.tsx:2:18:
      2 │ import style from "./styles/search.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:24:
      13 │ map-get($breakpoints, mobile)
         ╵                         ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Search.tsx:2:18:
      2 │ import style from "./styles/search.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:13:30:
      13 │ map-get($breakpoints, desktop)
         ╵                               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Search.tsx:2:18:
      2 │ import style from "./styles/search.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:14:25:
      14 │ map-get($breakpoints, desktop)
         ╵                          ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Search.tsx:2:18:
      2 │ import style from "./styles/search.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import [plugin sass-plugin]

    quartz/styles/variables.scss:16:14:
      16 │ map-get($breakpoints, mobile)
         ╵               ^

  The plugin "sass-plugin" was triggered by this import

    quartz/components/Search.tsx:2:18:
      2 │ import style from "./styles/search.scss"
        ╵                   ~~~~~~~~~~~~~~~~~~~~~~

