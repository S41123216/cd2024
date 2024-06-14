---
Title: 41123216-Internship assignment2
Date: 2024-06-8 15:00
Category: 41123216-Internship assignment
Tags: 41123216網誌編寫
Slug: 41123216-Internship assignment2
Author: Bee
---



<!-- PELICAN_END_SUMMARY -->

# 實習任務二 閱讀論文並摘要
1.Construction and theoretical study

研究控制理論在動態系統中的應用，以球體平衡平台為例。透過實體建構和電腦模擬對比，分析了控制理論在穩定不穩定系統時的限制，採用比例積分微分（PID）控制器，並探討各項參數對系統穩定性和性能的影響。實測結果顯示，平台能穩定球體，但存在靜態誤差和振蕩。論文分析了理論與實測結果差異的原因，包括建構誤差、元件特性和控制理論限制。未來研究方向包括使用更高精度的元件、改進控制器設計和增加平台的自由度。
keyword:Ball Balancing Platform、PID Controller、Static Error、Oscillation、Control Theory

2.A real time control system for balancing a ball on a platform with FPGA parallel implementation

一種新的基於 PID 控制器解決方案，用於提高球體在平台上實時平衡位置精度的科學和實務問題。推導了球體在平台上平衡的傳遞函數，並設計了 FPGA 上並行計算的 PID 控制器實現。自然模擬結果表明，該方法提高了球體在平台上平衡位置的精度。
keyword:PID Controller、FPGA、VHDL、Real-time System

3.Simulation_and_Experimental_Study_of_Ball_Position

雙軸平台上球體位置控制的模擬與實驗研究，探討了三種控制結構：PD 控制器、狀態空間回饋和帶有狀態空間回饋的狀態空間觀測器。論文建立了球體在平台上的數學模型，並分析了系統的穩定性和傳遞函數特性。此外，文章還介紹了直流電機位置迴路控制的設計，並比較了三種控制結構在模擬和實驗中的性能表現。結果顯示，帶有狀態空間觀測器的狀態空間回饋控制結構表現最佳，可以有效跟踪參考軌跡，實現球體的穩定平衡。
keyword:PD Controller、State Space Observer、State Space Feedback、Trajectory Tracking、Position Loop Control

4.Design and Implementation a Ball Balancing System for Control Theory Course

開發一個球體平衡系統，利用微控制器和控制演算法，通過實時感測器回饋調整平台角度，使球體保持平衡。平台的傾斜會使球體因重力沿軸向滑動，而系統則會通過閉環控制和精準調整參數，最小化球體實際位置與設定點之間的誤差。專案製作了三個原型，並進行了比較，重點在合理性和成本。系統可使用伺服馬達、距離感測器、微控制器板和機械平台組裝，並通過微控制器程式設計理解和實現控制演算法。
keyword:PID Control、Pedagogical Research、Real-time Sensory Feedback、Microcontroller

5.Ball_on_the_plate_balancing_control_system

雙自由度球體平衡實驗平台是理解控制系統的重要工具。球體在平台上平衡的機械設計和控制演算法。該平台配備了電阻式觸控面板用於獲取球體位置數據，步進馬達配備位置感測器用於平台傾斜角度回饋數據，以及基於 AVR 微控制器的雙迴路從屬控制系統，其中包含 PID 控制器用於保持球體位置。
keyword:Resistive Touch Screen、Stepper Motor、Position Sensor、AVR Microcontroller、PID Controller、Two-loop Subordinate Control System

6.2D Ball Balancer Control using QUARC

使用 QUARC 實作 2D 球體平衡控制系統。首先，以第一原理建立了球體在平台上的非線性運動方程式，並推導了系統的傳遞函數。接著，設計了內環伺服馬達位置控制器和外環球體位置 PID 控制器，並利用模擬驗證了控制器的性能。實驗過程中，評估了不同參數對系統響應的影響，包括設定點加權、積分器飽和與積分器防飽和。
keyword:2D Ball Balancing、QUARC、PID Controller、Transfer Function、State Space Feedback、	State Space Observer、Integrator Anti-windup、Set-point Weighting、	Trajectory Tracking