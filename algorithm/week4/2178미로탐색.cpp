// 쌤 코드

#include <bits/stdc++.h>

using namespace std;
// 행, 열을 관리하는 변수
int n, m;

// 1, 1에서부터 y,x 까지의 거리를 기록하는 배열 dist
int dist[101][101], input[101][101];

// y, x를 저장해두는 구조체 pos
struct pos {
    int y, x;
};

// in 함수 y, x가 올바른 범위 내인지 확인하는 함수
bool in(int y, int x){
    // y가 1 이상이고 n 이하인지 확인
    // x가 1 이상이고 m 이하인지 확인
    return 1 <= y && y <= n && 1 <= x && x <= m;
}

// bfs 함수
int bfs(pos start, pos end){
    queue<pos> q;
    // dist배열을 -1 로 초기화
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=m; j++) {
            dist[i][j] = -1;
        }
    }

    // 큐에 시작 좌표를 삽입
    q.push({start.y, start.x});

    // 시작점은 거리 1로 초기화
    dist[start.y][start.x] = 1;

    while(q.size()){
        pos here = q.front();
        q.pop();
        int dy[4] = {-1, 1, 0, 0};
        int dx[4] = {0, 0, -1, 1};

        // 상하좌우 4방향 탐색
        for(int i=0; i<4; i++){
            int next_y = dy[i] + here.y;
            int next_x = dx[i] + here.x;
            // 다음 좌표가 올바른 범위 내인지, 방문한 적이 1번도 없는지, 이동이 가능한지 확인해요
            if(in(next_y, next_x) && dist[next_y][next_x] == -1 && input[next_y][next_x] == 1){
                // 3 조건이 맞으면 거리를 업데이트하고
                dist[next_y][next_x] = dist[here.y][here.x] + 1;
                // 큐에 다음으로 이동할 좌표를 삽입해요
                q.push({next_y, next_x});
            }
        }
    }
    return dist[end.y][end.x];
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0);

    // n(열)과 m(행)을 입력받음
    cin >> n >> m;

    // 미로를 입력받는 부분
    for(int i=1; i<=n; i++){
        for(int j=1; j<=m; j++){
            // 문자로 m번 받으면 쉽게 입력 받을 수 있어요.
            char x;
            cin >> x;
            if(x == '1') {
                input[i][j] = 1;
            }
        }
    }
    // 1, 1에서 시작하고 n, m에서 끝나요
    cout << bfs({1, 1}, {n, m});
}
