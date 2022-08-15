'''
"총 5명의 학생이 시험을 보았는데 시험 점수가 60점이 넘으면 합격이고 그렇지 않으면 불합격이다. 합격인지 불합격인지 결과를 보여 주시오."
'''

scores = [60, 20, 70 , 80, 50]

numbers = 0
for score in scores: # 그냥 scores해도 먹히던데?
    numbers = numbers +1
    if scores >= 60:
        print("%d번 학생은 합격입니다." % numbers)
    else :
        print("%d번 학생은 불합격입니다." %numbers)
        # %d , % 사용하고 싶은 array 쓰면 되는구나.
    

marks = [90, 24, 34, 98, 88]

number = 0
for mark in marks:
    number = number + 1
    if mark < 60 :
        continue
    print("%d번 학생 축하합니다. 합격입니다." %number)

# for문과 함께 자주 사용되는 range 함수
# 엥... range도 함수였구나.
# : for문은 숫자 리스트를 자동으로 만들어주는 range함수와 함께 사용되는 경우가 많다. 
        # %d 무슨뜻이지? 살펴봐야.

a = range(10)
a

