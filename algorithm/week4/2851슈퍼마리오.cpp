#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	
	int sum = 0, memo = 0; // 100�� ����� ���� 98, 102ó�� �ΰ����� ���� �� �����Ƿ� sum(����ver)�� memo(������?ver)�� ���� ����. 
	for(int i=1; i<=10; i++){ // �Է��� �޴� �Լ��� ���� ���״µ� �׷� �ʿ���� ���� �Է��� ���� �ϸ� ��. 
	// 10�� �Է¹����Ű�, 10�� �����ִ°�. 
		int x; 
		cin >> x;
		sum += x;  // �Է¹��ڸ��� sum ������ ���������. 
		if(abs(sum - 100) <= abs(memo-100)) { // ���밪���� ���ϸ� �Ǵ±���.. 
		// ���࿡ ù x�� 10�̸� abs(memo-100)�� �� ũ�� �ǹǷ� memo�� sum ���� update��. 
		// ���� ��갪�� ���ؾ� �Ǳ� ������ �־��� if�� 
			memo = sum;
		}
	}
	cout << memo << '\n';	
}
