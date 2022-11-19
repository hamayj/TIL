#include <bits/stdc++.h>

using namespace std;

int dist[100100], n, k;



int bfs(int start, int end){
	for(int i=0; i<=100100; i++){
		dist[i] = -1;
	}
	queue<int> q;
	q.push(start);
	dist[start] = 0;
	while(q.size()){
		int here = q.front();
//		cout << here << "dist: "<<dist[here]<<'\n';
		q.pop();
		int next_v[3] = {here - 1, here + 1, here *2};
		for(int i = 0; i < 3; i++){
			int next = next_v[i];
			if (0 <= next && next <= 100000 && dist[next] == -1 ) {
				dist[next] = dist[here] + 1;
				q.push(next);
			}
		}
	}
	return dist[end];
}

int main(){
	ios::sync_with_stdio(0); cin.tie(0);
	cin >> n >> k ;
	cout << bfs(n, k) << '\n';
}
