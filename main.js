'use: script'

/* for(let i=9; i >= 5; i++){
    console.log(i);
}
 */
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('frizzbuzz');
    }
    else if (i % 3 == 0) {
        console.log('frizz');
    }
    else if (i % 5 == 0) {
        console.log('buzz');
    }
    console.log(i)

} 
/* ora stmpa anche frizzbuzz ma non sostituisce */