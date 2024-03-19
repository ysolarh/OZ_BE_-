import tracemalloc  # python 3.4 이상부터 지원. 메모리가 어떻게 할당됐는지 추적

tracemalloc.start()

# 메모리 할당이 진행되는 작업 아무거나 해본것
data = [b'%d' % num for num in range(1, 10001)]
joined_data = b' '.join(data)

current, peak = tracemalloc.get_traced_memory()  # 현재 사용량, 최대 사용량
print(f'현재 메모리 사용량: {current / 10 ** 6} MB')
print(f'최대 메모리 사용량: {peak / 10 ** 6} MB')

tracemalloc.stop()

traced = tracemalloc.get_tracemalloc_memory()  # tracemalloc 하느라 쓴 메모리
print(traced / 10 ** 6)

