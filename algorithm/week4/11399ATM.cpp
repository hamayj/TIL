#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);

	// ���� 
	int n, sum = 0, tmp = 0;
	cin >> n; // �����
	vector<int> v; // �ڷᱸ�� vector �ٽ� �����ؾ߰ڴ�..
					// �ڲ� �迭 ���µ� vector�� ���� -> �پ��� �Լ� ����.
		
	// �� �־��ֱ� 
	for(int i = 1, x; i<=n; i++){ // x �̷��� ���� �� �ֳ�? -> ������. for�� �� ������ �����̾ �̷��� ������.
		cin >> x;
		v.push_back(x); // ���� �������� �߰�.
	}
	sort(v.begin(), v.end()); // ���°� ��� ���� ���� �������ֱ�. �̹� ��� �����ϴ� ���±⿡ ó���Ŷ��� �����ָ� ��.
	
	// ��� �� �����ֱ�. 
	for(int i = 0; i<v.size(); i++){
		tmp += v[i]; // ����� �� �׻� �ӽ� ����Ҹ� ������ִ±���.
		sum += tmp;
	}
	cout << sum << '\n';

}

	 


