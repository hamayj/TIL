// ����

#include <iostream>
using namespace std;

int main() {
	int N, result = 0; // �ϴ� ����
	int temp, cnt = 0;
	cin >> N; // ���� ����
	for (int i = 0; i < N; i++) { // N����ŭ ��� ��������.
		cin >> temp; // temp�� �ϴ� ������ �־��ְ�
		for (int div = 1; div <= temp; div++) { // 1=1�̸� �����ٰ� �ص����� ����ó�� ��.
			if (temp%div == 0)
				cnt++; // temp���� ���� ������ �ϳ��� ī�����ϸ鼭 
		} // ex) temp�� 15�� ���, temp%div == 0 �� �Ǵ� ��찡 1, 3, 5, 15 �̹Ƿ� cnt�� 4
		if (cnt == 2)	//temp�� �Ҽ�. (1�� �ڱ��ڽ�)
			result++;
		cnt = 0;
	}
	cout << result << '\n';
}

// ���� �ٵ� 1 ����ó���� �����? ���� ó������.
