# 라운드 로빈 - cpu 스케줄링 알고리즘, 선입선출, 타임슬라이스(time_quantum)

def RoundRobin(processes, burst_time, time_quantum) :
    n = len(processes)
    remaining_time = list(burst_time)  # 프로세스마다 얼마나 걸리는지
    turnaround_time = [0] * n  # cpu 점유하다가 빠지는데 걸리는 시간
    waiting_time = [0] * n  # 기다리는 시간

    time = 0  # 누적 소요시간
    queue = []  # 대기큐 준비큐

    while True:
        all_completed = True  # 모든 프로세스 종료 시 반복문 종료를 위한 플래그 

        for i in range(n) :
            if remaining_time[i] > 0 :
                all_completed = False

                if remaining_time[i] > time_quantum :
                    time += time_quantum
                    remaining_time[i] -= time_quantum
                    queue.append(i)
                else :
                    time += remaining_time[i]
                    turnaround_time[i] = time
                    remaining_time[i] = 0
                    waiting_time[i] = turnaround_time[i] - burst_time[i]

        if all_completed :
            break
        
    print("Process\tTurnaround Time\t Waiting Time")
    for i in range(n) :
        print(f"P{i+1}\t\t{turnaround_time[i]}\t\t{waiting_time[i]}")

# 함수 호출해 기능 확인하기
processes = [1, 2, 3]
burst_time = [10, 5, 8]  # 소요시간
time_slice = 2

RoundRobin(processes, burst_time, time_slice)
