'use: script'

/* for(let i=9; i >= 5; i++){
    console.log(i);
}
 */
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('frizz');
    }
    else if (i % 5 == 0) {
        console.log('buzz');
    }
    else if (i % 15 == 0) {
        console.log('frizzbuzz');
    }
    console.log(i)

} 
