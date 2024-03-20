# 경로와 확장자 이용해 파일 찾고, 내용 읽기

import os

def searchFile(dirname, extension) :
    filenames = os.listdir(dirname)
    for filename in filenames :
        filepath = os.path.join(dirname, filename)
        if os.path.isdir(filepath) :
            searchFile(filepath, extension)
        elif os.path.isfile(filepath) :
            name, ext = os.path.splitext(filepath)
            if ext == extension :
                with open(filepath, "r", encoding = "utf-8") as f :
                    print(f.read())

# 특정 디렉토리 경로, 필터링하고 싶은 확장자 받아서 해당 조건 만족하는 파일 존재하면 읽어서 출력
searchFile("/Users/yyy/Documents/과제+강의_oz/13_operating_system/os_exam_class", ".js")

