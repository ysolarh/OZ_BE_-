# 인터럽트 예제
import time
import signal  # 비동기 이벤트에 대한 핸들러 모듈

# signum: 인터럽트 유형, frame: 스택영역의 정보
def handler(signum, frame) :
    print('키보드 인터럽트 감지')
    print('신호 번호:', signum)
    print('스택 프레임:', frame)
    exit()

signal.signal(signal.SIGINT, handler)
# SIGINT - 키보드 인터럽트 상수

while True :
    print('5초 간격으로 출력 중...')
    time.sleep(5)
