from multiprocessing import Process, Pipe
import os

def send(conn) :
    print(f'{os.getpid()}가 {os.getppid()}에게 데이터를 보낸다!')
    conn.send("Hello parent!")
    conn.close()

if __name__ == "__main__" :
    parent, child = Pipe()  # 생성자 함수
    p = Process(target=send, args=(child,))
    p.start()
    print('기존 프로세스 아이디:', os.getpid())
    print(parent.recv())  # send 반대
    p.join()  # 프로세스 작업 종료시까지 기다림
