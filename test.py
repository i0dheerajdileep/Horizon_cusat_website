import time

# Start the timer
start_time = time.time()

# Perform the task
a=1
for i in range (0,100000000):
    a=a+1
    
print(a)
# Your code goes here

# Calculate the elapsed time
elapsed_time = time.time() - start_time
print(elapsed_time)