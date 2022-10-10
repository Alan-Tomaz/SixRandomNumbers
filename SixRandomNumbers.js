function randomNumbers(param1 = false) {
let numbers = [];
let randomIndex = [];
let index;
let i = 0
let j = 1
for(i = 0; i <= 59; i++) {
	
numbers.push(Math.round(Math.random() * (60 - 1) + 1))
}
for(i = 0; i <= 5; i++, j++) {
index = Math.round(Math.random() * (59 - 0) + 0)
randomIndex.push(index);
console.log(j + "º: " + numbers[index] + "\n");
}
if(param1 == true) {
console.log(randomIndex);
console.log(numbers);
}
}


/*

C Version: 

#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include <stdbool.h>
#include <math.h>
int main ()
{
    int numbers[60];
    int randomIndex[6];
    int index;
    int i = 0;
    int j = 1;
    for (i = 0; i <= 59; i++)
{
	numbers[i] = round (rand() * (61 - 1) + 1);
}
    for (i = 0; i <= 5; i++, j++)
{
	index = round (rand() * (60 - 0) + 0);
	randomIndex[i] = index;
	printf("%dº: %d\n", j, numbers[index]);
}
	for (i=0;i < (sizeof (numbers) /sizeof (numbers[0])); i++) {
    printf("%d\n",numbers[i]);
}
    for (i=0;i < (sizeof (randomIndex) /sizeof (randomIndex[0]));i++) {
    printf("%d\n",randomIndex[i]);
}
  return 0;
}

*/
