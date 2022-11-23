#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);

	int sum[101010], n, m; // 101010으로 한 이유 : 입력이 100,000이어서 조금 더 크게 잡았다고 하심.
	cin >> n >> m; // 수의 개수, 합을 구해야되는 횟수
	for(int i=1, x; i<=n; i++){
		cin >> x; // n번만큼 수를 더해주는 배열을 만들거임. (합이 들어가있는 배열)
		sum[i] = sum[i-1] + x; // 이전까지의 합 + 본인 x
	}
	for(int i=1; i<=m; i++){ // 합 구해야되는만큼 출력해줄거임.
		int x, y; // 슬라이싱 해줄 애들.
		cin >> x >> y;
		cout << sum[y] - sum[x-1] << '\n'; 
	}
	// 연산 횟수를 줄여야 돼서 이렇게 범위를 좁혀준거임.
	// 억까지는 컴퓨터가 안힘든데 더 커지면 힘듦.

}

	 


