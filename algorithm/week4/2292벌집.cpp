#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int N; cin >> N; // ���� ��¥�� ������?

	int ans = 1;
	int len = 6; // ������
	int sum = 1;
	while(sum < N) {
		ans++; // N���� ������ +1 ���ֱ�.
		sum += len; // sum�� next ĭ���� �Ѿ �� ������ֱ�.
		len += 6;  
	}	
	cout << ans << endl;
}
