#include "bits/stdc++.h"
using namespace std;

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	vector<int> v[11];
	bool visit[11];
	void dfs(int node){
		cout << "node: " << node << '\n';
		visit[node] = true;
		for(int i=0; i<v[node].size(); i++){
			int next = v[node][i];
			if(visit[next]== false){
				dfs(next);
			}
		}
	} 
}
