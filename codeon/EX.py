def counter():
    cnt = 0

    def _increment(step = 1):
        cnt += step # 오류 발생
        return cnt

    return _increment

count_up = counter()
print(count_up())
print(count_up(2))
print(count_up(3))
