// �� �ڵ�

#include <bits/stdc++.h>

using namespace std;
// ��, ���� �����ϴ� ����
int n, m;

// 1, 1�������� y,x ������ �Ÿ��� ����ϴ� �迭 dist
int dist[101][101], input[101][101];

// y, x�� �����صδ� ����ü pos
struct pos {
    int y, x;
};

// in �Լ� y, x�� �ùٸ� ���� ������ Ȯ���ϴ� �Լ�
bool in(int y, int x){
    // y�� 1 �̻��̰� n �������� Ȯ��
    // x�� 1 �̻��̰� m �������� Ȯ��
    return 1 <= y && y <= n && 1 <= x && x <= m;
}

// bfs �Լ�
int bfs(pos start, pos end){
    queue<pos> q;
    // dist�迭�� -1 �� �ʱ�ȭ
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=m; j++) {
            dist[i][j] = -1;
        }
    }

    // ť�� ���� ��ǥ�� ����
    q.push({start.y, start.x});

    // �������� �Ÿ� 1�� �ʱ�ȭ
    dist[start.y][start.x] = 1;

    while(q.size()){
        pos here = q.front();
        q.pop();
        int dy[4] = {-1, 1, 0, 0};
        int dx[4] = {0, 0, -1, 1};

        // �����¿� 4���� Ž��
        for(int i=0; i<4; i++){
            int next_y = dy[i] + here.y;
            int next_x = dx[i] + here.x;
            // ���� ��ǥ�� �ùٸ� ���� ������, �湮�� ���� 1���� ������, �̵��� �������� Ȯ���ؿ�
            if(in(next_y, next_x) && dist[next_y][next_x] == -1 && input[next_y][next_x] == 1){
                // 3 ������ ������ �Ÿ��� ������Ʈ�ϰ�
                dist[next_y][next_x] = dist[here.y][here.x] + 1;
                // ť�� �������� �̵��� ��ǥ�� �����ؿ�
                q.push({next_y, next_x});
            }
        }
    }
    return dist[end.y][end.x];
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0);

    // n(��)�� m(��)�� �Է¹���
    cin >> n >> m;

    // �̷θ� �Է¹޴� �κ�
    for(int i=1; i<=n; i++){
        for(int j=1; j<=m; j++){
            // ���ڷ� m�� ������ ���� �Է� ���� �� �־��.
            char x;
            cin >> x;
            if(x == '1') {
                input[i][j] = 1;
            }
        }
    }
    // 1, 1���� �����ϰ� n, m���� ������
    cout << bfs({1, 1}, {n, m});
}
