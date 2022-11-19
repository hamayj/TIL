#include <bits/stdc++.h>

using namespace std;

// pos: y, x값을 가지고 있는 구조체
struct pos {
    int y, x;
};
/**
    input: 그래프를 나타내는 2차원 행렬 (상하좌우로 인접해있는 정점이 1이라면 연결된 정점)
    dist: 1,1 로부터의 거리를 나타내는 2차원 배열
 */
int input[6][6], dist[6][6];

int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    for(int i=1; i<=5; i++){
        for(int j=1; j<=5; j++){
            // 상하좌우 모든 정점으로 이동 가능하도록 1로 초기화
            input[i][j] = 1;
            dist[i][j] = -1;
        }
    }
    
    // y, x를 가질 수 있는 큐 선언
    queue<pos> q;
    
    // 큐에 1, 1 삽입 (y:1, x:1 부터 bfs를 시작하기 위해서)
    q.push({1, 1});
    
    // 1, 1에서 시작하니 1, 1은 거리 0으로 초기화
    dist[1][1] = 0;
    while(q.size()){
        // 지금 보고있는 정점 here.y, here.x
        pos here = q.front();
        
        // 지금 보고있는 정점을 큐에서 제거해요
        q.pop();
        
        // 상하좌우 4방향
        int dx[4] = {0, 0, -1, 1};
        int dy[4] = {-1, 1, 0, 0};
        
        for(int i=0; i<4; i++){
            // 현재 위치 y, x에서 부터 상하좌우 4방향 탐색해요
            int next_y = here.y + dy[i];
            int next_x = here.x + dx[i];
            
            // 다음으로 이동할 정점이 올바른 범위 내인지 체크
            if(1 <= next_x && next_x <= 5 && 1 <= next_y && next_y <= 5){
                
                // 아직 방문한 적이 없는지 체크
                if(dist[next_y][next_x] == -1){
                    
                    // 거리를 갱신하고 큐에 다음 정점을 넣어줘요.
                    dist[next_y][next_x] = dist[here.y][here.x] + 1;
                    q.push({next_y, next_x});
                }
            }
        }
    }
    for(int i=1; i<=5; i++){
        for(int j=1; j<=5; j++){
            cout << dist[i][j] << ' ';
        }
        cout << '\n';
    }
}
