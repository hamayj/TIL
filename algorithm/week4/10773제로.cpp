#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int n, ans = 0;
	cin >> n;
	stack<int> stk; // �ڷ� ���� ����ߵ��� �ϰ� �迭�� ������� �ߴµ� ���������� ���� ó���� ��� �ϴ��� ���� ������ �ڷᱸ�� �������ָ� �� �� 
	
	while(n--){ // for������ ����µ� �̰� �� ���ѵ�.
		int x;
		cin >> x;
		if (x == 0){
			stk.pop(); // 0�� ���� ������ ���� ���شٰ� ����.  
			//stack�� �̿��� ����: FILO�̱⿡ ������ ���� �ٷ� ���� �� ����. 
			// pop : ������ �� ����. 
		} 
		else {
			stk.push(x); // 0�� �ƴ� ��쿣 ���ÿ� �־��ش�. 
		}
	}	
	while(stk.size()){
		ans += stk.top(); // top :  �� ���� ���� ���ϸ� �ϰ� �����Ϳ� ������ ���� ����.
		stk.pop();
	}
	cout << ans;
}
