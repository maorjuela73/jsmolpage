%nprocshared=2
%mem=6GB
%chk=C3.chk
# opt=modredundant b3lyp/3-21g geom=connectivity

Title Card Required

0 1
 C                  1.91427617   -1.31212778    0.01839373
 C                  3.31602617   -1.31212778    0.01839373
 C                  3.74002417    0.05866822    0.01839373
 C                  2.58296717    0.85012122    0.01828973
 H                  1.21268817   -2.14536078    0.01849173
 H                  3.96039917   -2.18483378    0.01841873
 H                  4.76458717    0.41516022    0.01836873
 H                  2.47404517    1.93389322    0.01814273
 C                  1.47454917    0.00838022    0.01838473
 H                  0.88429643    0.19084222   -0.85523379
 H                  0.88442722    0.19095111    0.89206886
 C                  2.21686841   -0.99712173    3.18844249
 H                  2.99868616   -1.72738810    3.46376605
 H                  1.21010784   -1.24598009    3.46585374
 C                  2.59124581    0.38410116    3.18416351
 H                  1.83702127    1.09859541    3.48658465
 H                  3.62559959    0.61718741    3.48449696

 1 2 2.0 5 1.0 9 1.0
 2 3 1.0 6 1.0
 3 4 2.0 7 1.0
 4 8 1.0 9 1.0
 5
 6
 7
 8
 9 10 1.0 11 1.0
 10
 11
 12 13 1.0 14 1.0 15 2.0
 13
 14
 15 16 1.0 17 1.0
 16
 17

B 15 4 F
B 12 1 F

