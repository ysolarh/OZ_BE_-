import psutil

for proc in psutil.process_iter() :
    ps_name = proc.name()

    if "Chrome" in ps_name :
        child = proc.children()
        print("1", ps_name, "2", proc.status(), "3", proc.parent(), "4", child)

        if child :
            print(f'{ps_name}의 자식 프로세스', child)
