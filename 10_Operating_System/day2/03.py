# pip install psutil
# 내 컴퓨터에서 돌아가는 프로세스 조회하기

import psutil

# psutil.process_iter()
# 프로세스에 반복적으로 접근

for proc in psutil.process_iter():
    ps_name = proc.name()
    if "Chrome" in ps_name :
        print(ps_name, proc.pid)
