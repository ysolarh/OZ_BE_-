'''
십진법의 이해: 10개의 기호를 이용해서 숫자를 표현하는 체계
0 1 2 3 4 5 6 7 8 9
10 11 12 13 14 15 16 17 18 19
20 21 22 ...

이진법의 이해: 2개의 기호를 이용해서 숫자를 표현하는 체계
0 1
10 11
100 101 110 111
1000 ...

팔진법 0 1 2 3 4 5 6 7

십육진법 0 1 2 3 4 5 6 7 8 9 A B C D E F 10
'''

number = 99

b_num = bin(number)
print(b_num)  # 0b1100011 - 접두사 0b 붙어있음. 문자열

o_num = oct(number)
print(o_num)

h_num = hex(number)
print(h_num)

print(oct(int(b_num[2:])))