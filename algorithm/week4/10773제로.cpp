#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int n, ans = 0;
	cin >> n;
	stack<int> stk; // 자료 구조 뭐써야되지 하고 배열로 만드려고 했는데 마지막수나 수의 처리를 어떻게 하는지 여부 따지고 자료구조 선택해주면 될 듯 
	
	while(n--){ // for문으로 썼었는데 이게 더 편한듯.
		int x;
		cin >> x;
		if (x == 0){
			stk.pop(); // 0일 때는 마지막 수를 빼준다고 했음.  
			//stack을 이용한 이유: FILO이기에 마지막 수를 바로 빼줄 수 있음. 
			// pop : 마지막 수 꺼냄. 
		} 
		else {
			stk.push(x); // 0이 아닌 경우엔 스택에 넣어준다. 
		}
	}	
	while(stk.size()){
		ans += stk.top(); // top :  맨 위의 값을 리턴만 하고 데이터에 영향은 주지 않음.
		stk.pop();
	}
	cout << ans;
}
