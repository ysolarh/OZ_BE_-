# 메모리 사용 현황
# 가상 메모리 동작 현황
import psutil
import os

print("메모리 사용량 조회하기")

# virtual_memory() - 시스템 메모리 사용량에 대한 통계를 튜플 형식으로 반환 
memory_dict = dict(psutil.virtual_memory()._asdict())  # dict 형태로 받아주고 dict로 변환
print(memory_dict)

total = memory_dict['total']  # 물리 메모리의 총량
available = memory_dict['available']  # 즉시 제공 가능한 양
percent = memory_dict['percent']  # available 제외한 비율. 사용중인 양

print(f"메모리 총량: {total}")
print(f"메모리 즉시 제공 가능량: {available}")
print(f"메모리 샤용률: {percent}")

# 20.py의 메모리 사용량
pid = os.getpid()
current_process = psutil.Process(pid)
kb = current_process.memory_info()[0] / 2 ** 20  # 물리적 메모리 양을 킬로바이트 단위로 변환
print(f"메모리 사용량: {kb:.2f} KB")

