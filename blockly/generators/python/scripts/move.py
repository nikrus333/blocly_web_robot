import rospy
import time

from geometry_msgs.msg import Twist

def mover():
 pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
 r = rospy.Rate(10)
 vel - Twist()
 start = time.time()
 speed=dropdown_speed
 exec_time=value_seconds
 flag=True #time flag
 if speed =='SLOW':
  vel.linear.x=0.1
 elif speed =='NORMAL':
  vel.linear.x=0.3
 elif speed == 'FAST':
  vel.linear.x=0.5
 direction=dropdown_direction
 if direction =='STRAIGHT':
  vel.angular.z=0
 elif direction =='RIGHT':
  vel.angular.z=-0.5
 elif direction == 'LEFT':
  vel.angular.z=0.5
 while not rospy.is_shutdown() and flag:
  sample_time=time.time()
  if ((sample_time - start) > float(exec_time)):
   flag=False
  rospy.loginfo(msg)
  pub.publish(msg)
  r.sleep()

if __name__ == '__main__':
    rospy.init_node('tb_move')
    rospy.loginfo("Hello from TB move node")
    try:
        mover()
    except rospy.ROSInterruptException: pass