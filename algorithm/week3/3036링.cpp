#include<iostream>
using namespace std;

int gcd, N, arr[101];

// 유클리드 호제법.
int GCD(int a, int b)
{
	if (b == 0) return a;
	return GCD(b, a % b); // 재귀함수 근데 어떻게?
}

int main()
{
	cin >> N;

	for (int i = 0; i < N; i++)
		cin >> arr[i];

	for (int i = 1; i < N; i++)
	{
		gcd = GCD(arr[0], arr[i]);
		cout << arr[0] / gcd << "/" << arr[i] / gcd << endl;
	}
}
