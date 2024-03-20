# 파일 관련 예외는 운영체제와 관계가 있다!

try :
    f = open("none.txt", "r")
    print(f.read())
    f.close()
except FileNotFoundError as e :
    print(e)
    print(issubclass(FileNotFoundError, OSError))  # 첫번째 인자로 주어진 클래스가 두번째 인자로 주어진 클래스의 하위 클래스가 맞는지 확인하는 함수
    # True - 파일입출력 관련 예외가 운영체제 예외와 관계있음
    print(issubclass(ZeroDivisionError, OSError))
