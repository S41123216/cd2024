# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import random
import math



client = RemoteAPIClient('localhost', 23000)
 
print('Program started')
sim = client.getObject('sim')
sim.startSimulation()
print('Simulation started')
 
def setWheelMotion(leftSpeed, rightSpeed):
    # Set target velocity for each wheel
    frontLeftWheel = sim.getObject('/L1_Joint')
    frontRightWheel = sim.getObject('/R1_Joint')
    rearLeftWheel = sim.getObject('/L2_Joint')
    rearRightWheel = sim.getObject('/R2_Joint')
    sim.setJointTargetVelocity(frontLeftWheel, leftSpeed)
    sim.setJointTargetVelocity(frontRightWheel, rightSpeed)
    sim.setJointTargetVelocity(rearLeftWheel, leftSpeed)
    sim.setJointTargetVelocity(rearRightWheel, rightSpeed)
# Initialize motion variables
leftSpeed = 0
rightSpeed = 0
# Main loop
while True:
    # Check keyboard input
    if keyboard.is_pressed('w'):
        leftSpeed = 10  # Forward motion
        rightSpeed = 10  # Forward motion
    elif keyboard.is_pressed('s'):
        leftSpeed = -10  # Backward motion
        rightSpeed = -10  # Backward motion
    else:
        leftSpeed = 0
        rightSpeed = 0
 
    if keyboard.is_pressed('a'):
        leftSpeed -= 5  # Left turn
        rightSpeed += 5  # Left turn
    elif keyboard.is_pressed('d'):
        leftSpeed += 5  # Right turn
        rightSpeed -= 5  # Right turn
         
   
    # Set motion for all wheels
    setWheelMotion(leftSpeed, rightSpeed)
 
# Stop the simulation
sim.stopSimulation()