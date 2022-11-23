#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int sum = 0, memo = 0; // 100에 가까운 수가 98, 102처럼 두가지가 나올 수 있으므로 sum(최종ver)과 memo(최최종?ver)를 같이 만듦. 
	for(int i=1; i<=10; i++){ // 입력을 받는 함수를 따로 빼뒀는데 그럴 필요없이 계산과 입력을 같이 하면 됨. 
	// 10번 입력받을거고, 10번 더해주는거. 
		int x; 
		cin >> x;
		sum += x;  // 입력받자마자 sum 변수에 더해줘버림. 
		if(abs(sum - 100) <= abs(memo-100)) { // 절대값으로 비교하면 되는구만.. 
		// 만약에 첫 x가 10이면 abs(memo-100)이 더 크게 되므로 memo에 sum 값이 update됨. 
		// 직전 계산값과 비교해야 되기 떄문에 넣어준 if문 
			memo = sum;
		}
	}
	cout << memo << '\n';	
}
