#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	int x, y, w, h;
	cin >> x >> y >> w >> h; // �̷��� �� ���� ���� �� �ֱ���
	w = w-x; h = h-y;
	x = x>=w? w:x; // �� �κ� �ؼ��� �ȵ�. (=�� ���� �������� ó���Ǵ� ��?)
	y = y>=h? h:y;
	cout << (x>=y? y:x);
}
