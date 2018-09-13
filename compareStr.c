#include<stdio.h>
#include<string.h>
int  main() {
    char str1[100], str2[100];
    scanf("%s %s",str1,str2);
    int len1 = strlen(str1);
    int len2 = strlen(str2);
    int i;
    
    if(len1 < len2) {
        for(i = len1; i < len2; i++) {
            if(i % 2 == 1) {
                str1[i] = '.';
            } else {
                str1[i] = '0';
            }
        }
    }
    
    if(len1 > len2) {
        for(i = len2; i < len1; i++) {
            if(i % 2 == 1) {
                str2[i] = '.';
            } else {
                str2[i] = '0';
            }
        }
    }
    
    if(strcmp(str1,str2) < 0) {
        printf("-1");
    } else if(strcmp(str1,str2) > 0){
        printf("1");
    } else {
        printf("0");
    }
    
    return 0;
}