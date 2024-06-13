var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://s41123216.github.io/cd2024/ \n 網誌:  https://s41123216.github.io/cd2024/blog \n 簡報:  https://s41123216.github.io/cd2024/reveal \n 倉儲:  https://github.com/S41123216/cd2024 \n 期中統整影片 \n 1.利用https://github.com/mdecycu/cmsimde_site, 作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄 2.將個人倉儲 import 至 Replit並維護 3.或是利用 Codespaces 維護倉儲與網站 4.編輯網誌，網頁 5.翻譯論文 分配到的頁數 6.將指定影片上字幕 7.統整組員網誌 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'LaTeX分組作業', 'text': 'LaTeX 是一種專業的排版系統，常用於生成高品質的科技和數學文件，如學術論文、報告、書籍等。它是基於 TeX 的，由美國計算機科學家 Leslie Lamport 開發。LaTeX 提供了一套強大的命令和巨集，用於控制文件的結構、格式和樣式，使得用戶可以專注於內容而不用過多關注排版的細節。 \n 編譯分配內容( 連結 )包含圖片、 \xa0.txt (in LaTeX 格式) \n \n \n', 'tags': '', 'url': 'LaTeX分組作業.html'}, {'title': '影片嵌入字幕', 'text': '負責第13及14部影片 \n 第13部雲端連結 :  點擊  (包含影片及逐字稿) \n youtube連結: https://youtu.be/UMV1rVbFA2o \n 此影片主要是在說明設定倉儲時使用gitpod與個人token取得分組倉儲改版權限的過程，有以下個幾重點: \n 1. 使用token而不是ssh來啟動gitpod。將token存在本地以供使用，且這個token只是暫時性的，因此其他人不應該能夠看到它。 \n 2.使用vi編輯gitpod的配置檔案。進入編輯模式，進行上下左右移動、刪除文字以及插入token等操作。 \n 3.token不需要設定太久，影片中只設定7天的有效期。在存儲token後及時刪除以避免安全風險。 \n 4.gitpod啟動後有一定的時間限制，應在使用完畢後關閉計時。 \n ---------------------------------------------------------------------------------------------------------------- \n 第14部雲端連結 :\xa0 點擊 \xa0(包含影片及逐字稿) \n youtube連結: https://youtu.be/qxS-6c3NyPw \n 此影片主要內容為，分組整理影片、了解影片內容、撰寫影片摘要和網誌、以及資料操作注意事項。要求團隊成員對影片進行深入理解，並在整合過程中保持組織性和溝通。以下幾個重點: \n 1.將影片依照分組架構整理，並在觀看時提出問題的地方，以便進行討論和解決。同時，需要在影片上加入字幕，並嵌入到分組中。 \n 2.了解每週影片的內容並釋出逐字稿(txt)。影片的重要內容需要整合並重複強調。 \n 3.在嵌入的影片下方以條列式方式概述影片的教學重點，並在期中自評之前完成。 \n 4.每個組員每週至少寫一篇網誌，並將其整合到分組中。需要注意網誌名稱的前綴以避免蓋掉其他成員的文章。 \n \n \n \n \n', 'tags': '', 'url': '影片嵌入字幕.html'}, {'title': 'H1', 'text': '', 'tags': '', 'url': 'H1.html'}, {'title': 'W10協同資料處理', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  ##########################################  \n', 'tags': '', 'url': 'W10協同資料處理.html'}, {'title': '鋼球平衡台', 'text': '將各組員分配到的零件利用coppeliasim組裝並模擬( 零件 ) \n \n 鋼球平衡台( ttt檔 ) \n \n', 'tags': '', 'url': '鋼球平衡台.html'}, {'title': '實習任務二', 'text': '\n 閱讀論文並摘要 \n 1.Construction and theoretical study \n 研究控制理論在動態系統中的應用，以球體平衡平台為例。透過實體建構和電腦模擬對比，分析了控制理論在穩定不穩定系統時的限制，採用比例積分微分（PID）控制器，並探討各項參數對系統穩定性和性能的影響。實測結果顯示，平台能穩定球體，但存在靜態誤差和振蕩。論文分析了理論與實測結果差異的原因，包括建構誤差、元件特性和控制理論限制。未來研究方向包括使用更高精度的元件、改進控制器設計和增加平台的自由度。 \n keyword:Ball Balancing Platform、PID Controller、Static Error、Oscillation、Control Theory \n \n 2.A real time control system for balancing a ball on a platform with FPGA parallel implementation \n 一種新的基於 PID 控制器解決方案，用於提高球體在平台上實時平衡位置精度的科學和實務問題。推導了球體在平台上平衡的傳遞函數，並設計了 FPGA 上並行計算的 PID 控制器實現。自然模擬結果表明，該方法提高了球體在平台上平衡位置的精度。 \n keyword:PID Controller、FPGA、VHDL、Real-time System \n \n 3.Simulation_and_Experimental_Study_of_Ball_Position \n 雙軸平台上球體位置控制的模擬與實驗研究，探討了三種控制結構：PD 控制器、狀態空間回饋和帶有狀態空間回饋的狀態空間觀測器。論文建立了球體在平台上的數學模型，並分析了系統的穩定性和傳遞函數特性。此外，文章還介紹了直流電機位置迴路控制的設計，並比較了三種控制結構在模擬和實驗中的性能表現。結果顯示，帶有狀態空間觀測器的狀態空間回饋控制結構表現最佳，可以有效跟踪參考軌跡，實現球體的穩定平衡。 \n keyword:PD Controller、State Space Observer、State Space Feedback、Trajectory Tracking、Position Loop Control、、、 \n \n 4.Design and Implementation a Ball Balancing System for Control Theory Course \n 開發一個球體平衡系統，利用微控制器和控制演算法，通過實時感測器回饋調整平台角度，使球體保持平衡。平台的傾斜會使球體因重力沿軸向滑動，而系統則會通過閉環控制和精準調整參數，最小化球體實際位置與設定點之間的誤差。專案製作了三個原型，並進行了比較，重點在合理性和成本。系統可使用伺服馬達、距離感測器、微控制器板和機械平台組裝，並通過微控制器程式設計理解和實現控制演算法。 \n keyword:PID Control、Pedagogical Research、Real-time Sensory Feedback、Microcontroller \n \n 5.Ball_on_the_plate_balancing_control_system \n 雙自由度球體平衡實驗平台是理解控制系統的重要工具。球體在平台上平衡的機械設計和控制演算法。該平台配備了電阻式觸控面板用於獲取球體位置數據，步進馬達配備位置感測器用於平台傾斜角度回饋數據，以及基於 AVR 微控制器的雙迴路從屬控制系統，其中包含 PID 控制器用於保持球體位置。 \n keyword:Resistive Touch Screen、Stepper Motor、Position Sensor、AVR Microcontroller、PID Controller、Two-loop Subordinate Control System \n \n 6.2D Ball Balancer Control using QUARC \n 使用 QUARC 實作 2D 球體平衡控制系統。首先，以第一原理建立了球體在平台上的非線性運動方程式，並推導了系統的傳遞函數。接著，設計了內環伺服馬達位置控制器和外環球體位置 PID 控制器，並利用模擬驗證了控制器的性能。實驗過程中，評估了不同參數對系統響應的影響，包括設定點加權、積分器飽和與積分器防飽和。 \n keyword:2D Ball Balancing、QUARC、PID Controller、Transfer Function、State Space Feedback、 \xa0State Space Observer、Integrator Anti-windup、Set-point Weighting、Trajectory Tracking \n \n', 'tags': '', 'url': '實習任務二.html'}, {'title': 'W17', 'text': '期末實習評量項目一 \n 零件連結 \n \n 期末實習評量項目二 \n 零件連結 \n \n \n \n \n \n', 'tags': '', 'url': 'W17.html'}]};