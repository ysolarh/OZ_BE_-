# 과제2. 프로세스 생성
# 내 파이썬 프로그램의 이름을 알아보자.
import psutil
import os

pid = os.getpid()
for proc in psutil.process_iter():
    if proc.pid == pid:
        print(proc.name())
