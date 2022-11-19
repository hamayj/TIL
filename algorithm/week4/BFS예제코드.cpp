#include <bits/stdc++.h>

using namespace std;

// �ش� ���������� �Ÿ��� ����ϴ� �迭
int dist[11];

// �׷����� ǥ���ϴ� ����
vector<int> v[10];
int main(){
    // �׷��� �𵨸�
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
    
    // �⺻������ -1�� �ʱ�ȭ
    for(int i=1; i<=10; i++){
        dist[i] = -1;
    }
    
    // ť�� ������ ������ ����
    queue<int> q;
    q.push(1);
    
    // 1������ �����ϴ� �������� �Ÿ��� 0�̶� ���.
	
    dist[1] = 0;
    while(q.size()){
        // ���� ���� �����ִ� ����
        int here = q.front();
        q.pop();
       cout << "here: " << here << '\n';
       cout << "next: ";
        // �����ִ� �������� ����Ǿ��ִ� ������ ��� ��ȸ
        for(int i=0; i<v[here].size(); i++){
            
            // �������� �̵��� ����
            int next = v[here][i];
            cout << next <<' ';
            // ���� ���������� �Ÿ��� �ʱⰪ �״���� ��� (�湮������ ����)
            if(dist[next] == -1){
                // ���� ������ �Ÿ��� ���� ���������� �Ÿ� + 1
                dist[next] = dist[here] + 1;
                
                // ť�� ���� ������ ����
                q.push(next);
            }
        }
        cout << '\n';
    }
    
    for(int i=1; i<=7; i++){
        cout << dist[i] << ' ';
    }
}
