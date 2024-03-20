# 파일 복사 또는 이동

import os
import shutil

pwd = "/Users/yyy/Documents/과제+강의_oz/13_operating_system/os_exam_class"
filenames = os.listdir(pwd)

for filename in filenames :
    if "something" in filename :
        origin = os.path.join(pwd, filename)
        print(origin)
        # shutil.copy(origin, os.path.join(pwd, "copy.txt"))  # 복사
        shutil.move(origin, os.path.join(pwd, "anony"))
        