#include <bits/stdc++.h>

int factorial(int x){
	if(x <= 1) {
		return 1;
	}
	return factorial (x - 1) * x;
}
