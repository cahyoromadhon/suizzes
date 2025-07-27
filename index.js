#!/usr/bin/env node
// import package apasaja yang ingin digunakan dan jangan lupa untuk menginstallnya terlebih dahulu menggunakan npm
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;
// deklarasi variabel let dengan indentifier playerName yang akan digunakan untuk menyimpan nama pemain

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// variabel bernama sleep akan mengembalikan Promise yang akan diselesaikan setelah ms milidetik selesai atau selama 2 detik
// digunakan untuk memberikan jeda waktu dalam permainan

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Answer All Question and Win Million of SUI \n'
  );
  // simplenya keyword async berfungsi untuk mendeklarasikan fungsi asynchronous
  // artinya fungsi tersebut dapat melakukan operasi yang memakan waktu lama tanpa menghalangi eksekusi kode lainnya
  // chalkAnimation adalah package yang digunakan untuk membuat animasi teks berwarna
  // rainbow adalah efek warna yang akan diterapkan pada teks
  // fungsi ini akan membuat teks "Who Wants To Be A JavaScript Millionaire?" muncul dengan efek warna pelangi secara animasi

  await sleep();
  rainbowTitle.stop();
  // await digunakan untuk menghentikan eksekusi kode sampai Promise yang dikembalikan oleh sleep() selesai
  // artinya, kode berikutnya tidak akan dieksekusi sampai animasi teks pelangi selesai
  // rainbowTitle.stop() digunakan untuk menghentikan animasi teks pelangi setelah jeda waktu selesai
  // dan sleep() digunakan untuk memberikan jeda waktu sebelum melanjutkan eksekusi kode berikutnya
  // apabila waktu jeda sudah selesai maka animasi teks pelangi akan berhenti sesuai dengan method stop() yang telah dipanggil
  // tujuan: menghentikan animasi teks pelangi setelah jeda waktu selesai

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
  // tampilkan ke konsole teks yang berisi petunjuk cara bermain
  // chalk.bgBlue adalah fungsi dari package chalk yang digunakan untuk memberikan background biru pada teks "How To Play"
  // chalk.bgRed adalah fungsi dari package chalk yang digunakan untuk memberikan background merah pada teks "killed"
  // fungsi package ini cukup sederhana yaitu untuk memberikan warna pada teks yang ditampilkan di konsol
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: chalk.green(`Nice work ${playerName}. That's a legit answer`) });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}
// fungsi handleAnswer ini berguna untuk menangani jawaban pemain
// isCorrect adalah parameter boolean yang menunjukkan apakah jawaban pemain benar atau salah
// deklarasikan variabel spinner dengan fungsi createSpinner dari package nanospinner, berguna untuk membuat spinner animasi seolah-olah sedang memproses jawaban pemain
// .start() digunakan untuk memulai animasi spinner
// await sleep() memberikan jeda waktu 2detik sebelum melanjutkan ke eksekusi kode berikutnya
// masuk ke pengkondisian if untuk mengecek apakah jawaban pemain benar atau salah
// jika isCorrect bernilai true, maka spinner akan menampilkan pesan sukses dengan teks sesuai dengan apa yang diinginkan
// jika isCorrect bernilai false maka spinner akan menampilkan pesan error dengan teks yang sesuai dengan apa yang diinginkan
// dan program akan keluar dengan kode status 1 menggunakan process.exit(1) yang menandakan bahwa program berakhir dengan kesalahan

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}
// fungsi askName ini digunakan untuk meminta memasukkan nama pemain
// inquirer.prompt digunakan untuk menampilkan pertanyaan kepada pemain
// name adalah nama dari pertanyaan yang akan digunakan untuk mengakses jawaban pemain
// type adalah tipe input yang akan digunakan, dalam hal ini adalah input teks
// message adalah pesan yang akan ditampilkan kepada pemain
// default adalah nilai default yang akan ditampilkan jika pemain tidak memasukkan nama
// setelah pemain memasukkan nama, nilai tersebut akan disimpan dalam variabel playerName

function winner() {
  console.clear();
  figlet(`Reward $ 1 . 0 0 0 . 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.redBright(
        `   Now Get a JOB! (ง'̀-'́)ง \n`
      )
    );
    process.exit(0);
  });
}
// fungsi winner ini akan dipanggil ketika pemain berhasil menjawab semua pertanyaan dengan benar
// console.clear() digunakan untuk membersihkan konsol sebelum menampilkan pesan kemenangan
// figlet digunakan untuk membuat teks besar dengan gaya ASCII art
// figlet menerima dua parameter, teks yang akan ditampilkan dan callback function yang akan dieksekusi setelah teks selesai dibuat
// callback function menerima dua parameter, err dan data, yang dimana err adalah error jika terjadi kesalahan saat membuat teks dan data adalah teks yang telah dibuat
// gradient.pastel.multiline(data) digunakan untuk memberikan efek gradasi warna pada teks sesuai yang diinginkan
// console.log chalk.green digunakan untuk menampilkan pesan dengan warna hijau
// process.exit(0) digunakan untuk keluar dari program dengan kode status 0 yang menandakan bahwa program berakhir dengan sukses

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Apa itu Sui dalam konteks blockchain?\n',
    choices: [
      'Bahasa pemrograman untuk smart contract',
      'Blockchain layer-1 yang dirancang untuk skalabilitas tinggi',
      'Framework untuk pengembangan aplikasi web',
      'Protokol konsensus untuk Ethereum',
    ],
  });
  return handleAnswer(answers.question_1 === 'Blockchain layer-1 yang dirancang untuk skalabilitas tinggi');
}
  // mulai darisini pertanyaan akan dibuat dan seringkali memiliki format yang sama karena fungsi penting telah dideklarasikan sebelumnya
  // await artinya tunggu sampai inquirer.prompt selesai mendapatkan jawaban dari pemain
  // inquirer.prompt digunakan untuk menampilkan pertanyaan kepada pemain
  // choices memungknkan pemain dapat memilih jawaban dari daftar pilihan yang telah disediakan
  // return handleAnswer fungsi yang akan digunakan untuk memeriksa apakah jawaban pemain benar atau salah
  // dengan parameter isCorrect yaitu jawaban pemain yang benar yaitu 'Dec 4th, 1995'
  // ulangi prosesnya untuk setiap pertanyaan yang akan ditampilkan kepada pemain

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Apa fungsi utama bahasa pemrograman Move?\n',
    choices: ['Mengembangkan aplikasi front-end', 'Mengelola database relasional', 'Mengotomatisasi deployment server', 'Membuat smart contract'],
  });
  return handleAnswer(answers.question_2 === 'Membuat smart contract');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
winner();

// ini memungkinkan kita untuk menulis kode yang lebih bersih dan mudah dibaca tanpa harus membungkus seluruh kode dalam fungsi async
// dengan menggunakan top-level await, kita dapat langsung mengeksekusi fungsi asynchronous tanpa harus menunggu fungsi tersebut selesai
// ini sangat berguna dalam konteks aplikasi CLI seperti ini, di mana kita ingin menampilkan pesan selamat datang, meminta nama pemain,
// dan kemudian menjalankan pertanyaan-pertanyaan tanpa harus menunggu setiap langkah selesai satu per satu