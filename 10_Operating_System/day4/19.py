# 논리주소 공간, 메모리 현황 확인

foods = ["햄버거", "샐러드", "비스킷"]

print(id(foods))  # 참조자가 어떤 주소를 참조하고 있는지 반환. 논리 주소 공간의 주소
print(hex(id(foods)))

mv = memoryview(b"happy day")  # b - 문자열을 바이트로 변환. 이진 데이터로 작업하거나 네트워크 스트림에서 읽고 쓸때 바이트 단위가 편리
print(mv)

print(mv[0])  # 유니코드 출력됨
print(mv[1])
print(mv[2])
print(mv[3])

print(mv[20])  # 인덱스 에러 발생
