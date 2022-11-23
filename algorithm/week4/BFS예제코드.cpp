#include <bits/stdc++.h>

using namespace std;

// 해당 정점까지의 거리를 기록하는 배열
int dist[11];

// 그래프를 표현하는 벡터
vector<int> v[10];
int main(){
    // 그래프 모델링
    v[1].push_back(4);
    v[4].push_back(1);
    v[4].push_back(5);
    v[5].push_back(4);
    v[4].push_back(2);
    v[2].push_back(4);
    v[2].push_back(3);
    v[3].push_back(2);
    v[6].push_back(7);
    v[7].push_back(6);
    
    // 기본값으로 -1로 초기화
    for(int i=1; i<=10; i++){
        dist[i] = -1;
    }
    
    // 큐에 시작점 정점을 삽입
    queue<int> q;
    q.push(1);
    
    // 1번부터 시작하니 시작점은 거리가 0이라 기록.
	
    dist[1] = 0;
    while(q.size()){
        // 내가 지금 보고있는 정점
        int here = q.front();
        q.pop();
       cout << "here: " << here << '\n';
       cout << "next: ";
        // 보고있는 정점에서 연결되어있는 정점을 모두 순회
        for(int i=0; i<v[here].size(); i++){
            
            // 다음으로 이동할 정점
            int next = v[here][i];
            cout << next <<' ';
            // 다음 정점까지의 거리가 초기값 그대로인 경우 (방문한적이 없음)
            if(dist[next] == -1){
                // 다음 정점의 거리는 현재 정점까지의 거리 + 1
                dist[next] = dist[here] + 1;
                
                // 큐에 다음 정점을 삽입
                q.push(next);
            }
        }
        cout << '\n';
    }
    
    for(int i=1; i<=7; i++){
        cout << dist[i] << ' ';
    }
}
