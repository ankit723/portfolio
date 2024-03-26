#include <stdio.h>
#include<string.h>


int sum(int a, int b){
    int ans=a+b;
    return ans;
}

void isIntPalindrome(int number){//1221
    int copy=number;
    int temp=0;
    while(copy>0){
        temp=(temp*10)+(copy%10);
        copy/=10;
    }
    if(temp==number){
        printf("number is a palindrome \n");
    }else{
        printf("number is not a palindrome \n");
    }
}

void isStrPalindrome(char name[10]){//ankit, trisha, tushar
    int len = strlen(name);
    char *is="isPalindrome";
    for (int i = 0; i < len / 2; i++){
        if(name[i]!=name[len-1-i]){
            is="isNotPalidrome";
            break;
        }
    }
    if(is=="isPalindrome"){
        printf("is a palindrome");
    }else{
        printf("not a palindrome");
    }

}

int main(){
    int ans=sum(1, 2);
    printf("%d \n", ans);
    isIntPalindrome(1221);
    char a[10]="tushar";
    char b[10]="trisha";
    printf("%s loves %s \n", a, b);
    isStrPalindrome("eye");
    return 0;
}

// returnType functionName(argument1, argument2, ...){
//  perform action on arguments
//}