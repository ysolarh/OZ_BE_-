# 프로세스 풀도 파이썬 모듈 지원됨. 파이썬 모듈에서 스레드 풀은 gpo? 안정성 문제 때문에 프로세스 풀로 구현하는걸 권장

import concurrent.futures
import time

def task(name) :
    time.sleep(0.5)
    return f"{name}의 작업이 완료되었습니다."

if __name__ == "__main__" :
    with concurrent.futures.ProcessPoolExecutor(max_workers=3) as executor :
        future_name = { executor.submit(task, f"Task-{i}") : f"Task-{i}" for i in range(5) }  # 프로세스 풀한테 작업(task)을 넘겨줌
        # print(future_name)

        # 작업 완료된 순서대로 결과 출력
        for future in concurrent.futures.as_completed(future_name) :
            name = future_name[future]  # task 01234 얻음
            try :
                result = future.result()  # 주어진 task가 끝났을때 반환값을 반환받는 함수
                print(f"{name}의 결과: {result}")  # 012 순서는 랜덤, 34는 상대적으로 순차적
            except Exception as e :
                print(e)
