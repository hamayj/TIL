vector<int> v;
for(int i=1; i<=100; i++) {
	v.push_back(i);
}

int l = 0, r = v.size()-1, key = 33, answer = 0;

while(l <= r){
	int mid = ( l + r ) / 2;
	if( v[mid] < key) {
		l = mid + 1;
	}
	else if(v[mid] > key){
		r = mid -1 ; 
	}
	else {
		answer = mid;
		break;
	}
}
