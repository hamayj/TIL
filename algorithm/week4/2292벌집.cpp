#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int N; cin >> N; // 숫자 몇짜리 방인지?

	int ans = 1;
	int len = 6; // 등비수열
	int sum = 1;
	while(sum < N) {
		ans++; // N보다 작으면 +1 해주기.
		sum += len; // sum에 next 칸으로 넘어간 것 계산해주기.
		len += 6;  
	}	
	cout << ans << endl;
}
