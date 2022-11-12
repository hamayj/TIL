#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	int x, y, w, h;
	cin >> x >> y >> w >> h; // 이렇게 한 번에 넣을 수 있구만
	w = w-x; h = h-y;
	x = x>=w? w:x; // 이 부분 해석이 안됨. (=은 가장 마지막에 처리되는 것?)
	y = y>=h? h:y;
	cout << (x>=y? y:x);
}
