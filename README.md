Test with sensors from json 8pcs:
reading from json - 31ms
positioning - 2ms
sensor status changing - 0-2ms

Test with 4К image 1pcs:
positioning - 2мс
sensor status changing - 1ms




Tests with great number of sensors (loaded with random coords)

400pcs:
positioning - 42ms
заміна - 27-30ms

4000pcs:
positioning - 300ms
sensor status changing - 250-270ms

all sensors were located in local (client) directory, everything depends on local computer speed 




Every test was made in "Google Chrome v93.0.4577.82" (64-bit)