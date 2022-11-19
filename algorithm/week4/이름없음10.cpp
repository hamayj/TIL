#include <bits/stdc++.h>

using namespace std;

int dist[10000100], n, m;



int bfs(int start, int end){
	for(int i=0; i<=1000000; i++){
		dist[i] = -1;
	}
	queue<int> q;
	q.push(start);
	dist[start] = 0;
	while(q.size()){
		int here = q.front();
//		cout << here << "dist: "<<dist[here]<<'\n';
		q.pop();
		int next_v[2] = {here + 1, here * 2};
		for(int i = 0; i < 2; i++){
			int next = next_v[i];
			if (1 <= next && next <= 1000000 && dist[next] == -1 ) {
				dist[next] = dist[here] + 1;
				q.push(next);
			}
		}
	}
	return dist[end];
}

int main(){
	ios::sync_with_stdio(0); cin.tie(0);
	cin >> n >> m ;
	cout << bfs(n, m) << '\n';
}
