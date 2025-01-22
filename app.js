//for 1
//k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

//let k = +prompt("k sonini kiriting");
//let n = +prompt("n sonini kiriting");
//for (let i = 0; i < n; i++) {
//console.log(k);
//}

//for 2
//Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

//let narx = 5000;
//for (let i = 1; i <= 10; i++) {
//console.log(`${i / 10} kg = ${Math.round((i / 10) * narx)} so'm `);
//}

//for 3
//n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
//S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

//let n = +prompt("Son kiriting");
//let sum = 0;
//for (let i = 0; i <= n; i++) {
//sum += (n + i) ** 2;
//}
//console.log(sum);

//for 4
//N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
//1^N+2^(N-1) + ...+ N^1

//let n = +prompt("Son kiriting");
//let k = n;
//let sum = 0;
//for (i = 1; i <= 5; i++) {
//sum += i ** k;
//k--;
//}
//console.log(sum);

//for 5
//A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining //qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

//let A = +prompt("Son kiriting");
//let B = +prompt("Son kiriting");

//for (i = A; i <= B; i++) {
//for (let k = 0; k < i; k++) {
//console.log(i);
//}
//}

//for 6
//Sonning bo’luvchilarini topish;

//let raqam = +prompt("Son kiriting");
//for (i = 1; i <= raqam; i++) {
//if (raqam % i == 0) {
//console.log(i);
//}
//}

//for 7
//N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

//let N = +prompt("Son kiriting");
//let K = +prompt("Son kiriitng");
//let counter = 0;
//for (i = K; i < N; i++) {
//if (N < K) {
// console.log(N);
//}
//while (N >= K) {
//console.log(`${N} - ${K} = ${N - K}`);
// N -= K;
// counter++;
//}
//}
//console.log(counter);
//console.log(N);

//for 8
//2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
//let n = +prompt("Son kiriting");
//let i = 0;
//let sum = 0;
//while (sum < n) {
//sum = 2 ** i;
//i++;
//}
//console.log(i);

//for 9
//a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let counter = 0;
//for (let i = a; i <= b; i++) {
//if (a < b) {
//console.log(i);
//counter++;
//} else {
//console.log("Sonlar mavjud emas");
//}
//}
//console.log("Jami sonlar:", counter);

//for 10
//a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va
//chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let counter = 0;
//for (i = a + 1; i <= b - 1; i++) {
//if (a < b) {
//console.log(i);
//counter++;
//} else {
//console.log("Sonlar mavjud emas");
//}
//}
//console.log("Jami sonlar:", counter);
