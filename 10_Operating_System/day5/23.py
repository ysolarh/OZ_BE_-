# 기본적인 파일 입출력 예제

with open("number_one.txt", "w") as f :
    f.write("one!")

with open("number_two.txt", "w") as f :
    f.write("two!")

with open("number_three.txt", "w") as f :
    f.write("three!")

with open("number_four.txt", "w") as f :
    f.write("four!")

import glob  # 파일네임의 패턴을 이용해 한꺼번에 접근하기

for filename in glob.glob("*.txt", recursive=True):  # glob - 공통된 이름을 통해 filename에 한꺼번에 접근
    print(filename)

import fileinput

with fileinput.input(glob.glob("*.txt")) as fi :  # 한꺼번에 처리하기
    for line in fi :
        print(line)

import fnmatch  # file name에서 공통된 패턴을 이용해서 파일을 가져오거나 정규표현식으로 파일을 찾을때
import os

for filename in os.listdir('.') :  # 현재 dir에 있는 내용을 listup
    if fnmatch.fnmatch(filename, "??????_*.txt") :  # ? - 문자 하나 아무거나, * - 글자수 상관없이 아무거나
        print(filename)
