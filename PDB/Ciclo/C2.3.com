%nprocshared=2
%mem=6GB
%chk=C3.chk
# opt=modredundant b3lyp/3-21g geom=connectivity

Title Card Required

0 1
 C                 -0.79369200    1.18537200   -0.33569000
 C                 -1.11923800    0.73143300    0.89727700
 C                 -1.11908900   -0.73982100    0.89046500
 C                 -0.79293200   -1.18230800   -0.34652300
 H                 -0.72425800    2.21634800   -0.65177800
 H                 -1.32329400    1.33640600    1.76992400
 H                 -1.32312700   -1.35291500    1.75742900
 H                 -0.72330000   -2.21038000   -0.67191000
 C                 -0.66367600    0.00577000   -1.28382700
 H                 -1.50945900    0.00868200   -1.99090600
 H                  0.26287100    0.00924700   -1.86120300
 C                  1.43337450    0.77313118    0.06460031
 H                  1.84768600    1.23852800    1.07340300
 H                  2.20450100    1.24205500   -0.73137900
 C                  1.43312268   -0.77348940    0.06280318
 H                  2.20406400   -1.24443000   -0.73004300
 H                  1.84698300   -1.23871000    1.07460400

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

B 4 15 F
B 1 12 F

