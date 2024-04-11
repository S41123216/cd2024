var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"影片嵌入字幕","text":"將字幕嵌入影片 我負責第13及14部影片的部分，以下是連結及總結 第13部雲端連結 youtube連結: https://youtu.be/UMV1rVbFA2o 此影片主要是在說明設定倉儲時使用gitpod與個人token取得分組倉儲改版權限的過程，有以下個幾重點: 1.使用token而不是ssh來啟動gitpod。將token存在本地以供使用，且這個token只是暫時性的，因此其他人不應該能夠看到它。\\ 2.使用vi編輯gitpod的配置檔案。進入編輯模式，進行上下左右移動、刪除文字以及插入token等操作。\\ 3.token不需要設定太久，影片中只設定7天的有效期。在存儲token後及時刪除以避免安全風險。\\ 4.gitpod啟動後有一定的時間限制，應在使用完畢後關閉計時。 第14部雲端連結 youtube連結: https://youtu.be/qxS-6c3NyPw 此影片主要內容為，分組整理影片、了解影片內容、撰寫影片摘要和網誌、以及資料操作注意事項。要求團隊成員對影片進行深入理解，並在整合過程中保持組織性和溝通。以下幾個重點: 1.將影片依照分組架構整理，並在觀看時提出問題的地方，以便進行討論和解決。同時，需要在影片上加入字幕，並嵌入到分組中。\\ 2.了解每週影片的內容並釋出逐字稿(txt)。影片的重要內容需要整合並重複強調。\\ 3.在嵌入的影片下方以條列式方式概述影片的教學重點，並在期中自評之前完成。\\ 4.每個組員每週至少寫一篇網誌，並將其整合到分組中。需要注意網誌名稱的前綴以避免蓋掉其他成員的文章。","tags":"w8","url":"./41123216 2024-Spring-w8-blog-tutorial.html"},{"title":"W7","text":"待編輯","tags":"w7","url":"./41123216 2024-Spring-w7-blog-tutorial.html"},{"title":"W6","text":"各組討論 依分配事項進行分工，並在現場提出問題或詢問導師。 決定各組員負責嵌入哪一部影片的字幕。 持續編譯論文。","tags":"w6","url":"./41123216 2024-Spring-w6-blog-tutorial.html"},{"title":"W5","text":"編譯論文 利用 Overleaf, Online LaTeX Editor 網站編譯 https://webthesis.biblio.polito.it/16429/1/tesi.pdf 內容 並將個人分配部分交給組長整合至分組倉儲( 連結 )","tags":"w5","url":"./41123216 2024-Spring-w5-blog-tutorial.html"},{"title":"W4","text":"xelatex 編譯 在各自的個人課程倉儲放置所被交付編寫的 .txt (in LaTeX 格式), 然後整合至各組的分組倉儲, 由 xelatex 編譯出各週的分組報告 pdf 檔案.","tags":"w4","url":"./41123216 2024-Spring-w4-blog-tutorial.html"},{"title":"W3","text":"將組員的個人倉儲設為分組倉儲子模組 指令:git submodule add 組員的個人倉儲網址 組員的學號 如:git submodule add https://github.com/S41123216/cd2024.git 41123216 如此一來 Github 帳號為 S41123216 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲.","tags":"w3","url":"./41123216 2024-Spring-w3-blog-tutorial.html"},{"title":"W2","text":"組長建立 Team 並設定分組倉儲 因其分組倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 範例: https://github.com/mdecd2024/test-ag1","tags":"w2","url":"./41123216 2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123216 2024-Spring-w1-blog-tutorial.html"}]};