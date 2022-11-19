#include <bits/stdc++.h>

using namespace std;

// pos: y, x���� ������ �ִ� ����ü
struct pos {
    int y, x;
};
/**
    input: �׷����� ��Ÿ���� 2���� ��� (�����¿�� �������ִ� ������ 1�̶�� ����� ����)
    dist: 1,1 �κ����� �Ÿ��� ��Ÿ���� 2���� �迭
 */
int input[6][6], dist[6][6];

int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    for(int i=1; i<=5; i++){
        for(int j=1; j<=5; j++){
            // �����¿� ��� �������� �̵� �����ϵ��� 1�� �ʱ�ȭ
            input[i][j] = 1;
            dist[i][j] = -1;
        }
    }
    
    // y, x�� ���� �� �ִ� ť ����
    queue<pos> q;
    
    // ť�� 1, 1 ���� (y:1, x:1 ���� bfs�� �����ϱ� ���ؼ�)
    q.push({1, 1});
    
    // 1, 1���� �����ϴ� 1, 1�� �Ÿ� 0���� �ʱ�ȭ
    dist[1][1] = 0;
    while(q.size()){
        // ���� �����ִ� ���� here.y, here.x
        pos here = q.front();
        
        // ���� �����ִ� ������ ť���� �����ؿ�
        q.pop();
        
        // �����¿� 4����
        int dx[4] = {0, 0, -1, 1};
        int dy[4] = {-1, 1, 0, 0};
        
        for(int i=0; i<4; i++){
            // ���� ��ġ y, x���� ���� �����¿� 4���� Ž���ؿ�
            int next_y = here.y + dy[i];
            int next_x = here.x + dx[i];
            
            // �������� �̵��� ������ �ùٸ� ���� ������ üũ
            if(1 <= next_x && next_x <= 5 && 1 <= next_y && next_y <= 5){
                
                // ���� �湮�� ���� ������ üũ
                if(dist[next_y][next_x] == -1){
                    
                    // �Ÿ��� �����ϰ� ť�� ���� ������ �־����.
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
