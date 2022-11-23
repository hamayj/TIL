#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);

	// 선언 
	int n, sum = 0, tmp = 0;
	cin >> n; // 사람수
	vector<int> v; // 자료구조 vector 다시 공부해야겠다..
					// 자꾸 배열 쓰는데 vector의 장점 -> 다양한 함수 제공.
		
	// 값 넣어주기 
	for(int i = 1, x; i<=n; i++){ // x 이렇게 넣을 수 있나? -> 가능함. for문 맨 앞쪽은 선언문이어서 이렇게 가능함.
		cin >> x;
		v.push_back(x); // 벡터 마지막에 추가.
	}
	sort(v.begin(), v.end()); // 들어온거 계속 오름 차순 정렬해주기. 이미 계속 정렬하던 상태기에 처음거랑만 비교해주면 됨.
	
	// 출력 전 더해주기. 
	for(int i = 0; i<v.size(); i++){
		tmp += v[i]; // 계산할 때 항상 임시 저장소를 만들어주는구만.
		sum += tmp;
	}
	cout << sum << '\n';

}

	 


