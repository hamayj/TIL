#include <bits/stdc++.h>

vector<int> v;

for(int i = 1; i<=4; i++){
	v.push_back(i);
}
do{
	for(int i=0; i<v.size(); i++){
		cout << v[i] << ' ';
	}
	cout << '\n';
} while(next_permutation(v.begin(), v.end()));

