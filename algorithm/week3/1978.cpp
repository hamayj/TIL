// 답지

#include <iostream>
using namespace std;

int main() {
	int N, result = 0; // 일단 셋팅
	int temp, cnt = 0;
	cin >> N; // 수의 개수
	for (int i = 0; i < N; i++) { // N개만큼 출력 받을거임.
		cin >> temp; // temp에 일단 받은거 넣어주고
		for (int div = 1; div <= temp; div++) { // 1=1이면 끝난다고 해뒀으니 예외처리 됨.
			if (temp%div == 0)
				cnt++; // temp까지 전의 수까지 하나씩 카운팅하면서 
		} // ex) temp가 15일 경우, temp%div == 0 이 되는 경우가 1, 3, 5, 15 이므로 cnt가 4
		if (cnt == 2)	//temp가 소수. (1과 자기자신)
			result++;
		cnt = 0;
	}
	cout << result << '\n';
}

// 여기 근데 1 제외처리는 어딨지? 위에 처리해줌.
