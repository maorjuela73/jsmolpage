%nprocshared=2
%mem=6GB
%chk=C3.chk
# opt=modredundant b3lyp/3-21g geom=connectivity

Title Card Required

0 1
 C                 -1.06445600    1.17727600   -0.31750300
 C                 -1.45327600    0.65962900    0.87256500
 C                 -1.33715700   -0.82096200    0.82525200
 C                 -0.88854200   -1.19808900   -0.39631000
 H                 -1.08572700    2.22940000   -0.57535600
 H                 -1.80750500    1.22583700    1.72253000
 H                 -1.58785500   -1.48490600    1.63886900
 H                 -0.74611200   -2.21759500   -0.73737800
 C                 -0.69128000    0.06209600   -1.25853200
 H                 -1.37520200    0.00298000   -2.12612000
 H                  0.32143300    0.14805300   -1.63291700
 C                  2.15022084    0.73808723    0.99511500
 H                  2.42041273    1.36220937    0.18818149
 H                  1.99606770    1.13156899    2.01288816
 C                  2.33338700   -0.61852490    0.84194642
 H                  2.37716354   -1.31497925    1.68773007
 H                  2.71199168   -0.93668046   -0.11043574

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

