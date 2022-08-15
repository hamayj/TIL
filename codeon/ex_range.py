a = range(10) # = range(0,10)
print(a) 

# range(10)은 0부터 10 미만의 숫자를 포함하는 range객체를 만들어줌.
# 시작과 끝 수 지정가능 range(시작 숫자, 끝 숫자) 이 때 끝 숫자는 포함안됨.

a = range(1, 11)
print(a)

# range 함수의 예시 살펴보기
# for와 range 함수를 사용하면 1부터 10까지 더하는 것을 다음과 같이 쉽게 구현가능.

add = 0
for i in range(1, 11):
    add = add + i

marks = [90, 24, 64, 89, 34]

for number in range(len(marks)): # len(array): array길이 재는 함수
    if marks[number] < 60:
        continue
    print("%dq번 학생 축하합니다. 합격입니다." %number) 