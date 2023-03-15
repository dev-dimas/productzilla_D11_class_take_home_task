class Person {
  name;
  age;
  gender;
  height;
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  setGender(gender) {
    this.gender = gender;
  }
  setHeight(height) {
    this.height = height;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }
  getHeight() {
    return this.height;
  }
}

console.log('=== Person Instance ===');
const elonMusk = new Person();
elonMusk.setName('Elon Reeve Musk');
elonMusk.setAge(51);
elonMusk.setGender('Male');
elonMusk.setHeight('187cm');
const elonMuskName = elonMusk.getName();
const elonMuskAge = elonMusk.getAge();
const elonMuskGender = elonMusk.getGender();
const elonMuskHeight = elonMusk.getHeight();
console.log('Name :', elonMuskName);
console.log('Age :', elonMuskAge);
console.log('Gender :', elonMuskGender);
console.log('Height :', elonMuskHeight);

// =======================================================

class Student {
  constructor(nama, NIM) {
    this.nama = nama;
    this.NIM = parseInt(NIM);
  }

  daftarNilai = [];

  insertNilai(...argsNilai) {
    let daftarNilai = [];
    for (let nilai of argsNilai) {
      nilai = parseInt(nilai);
      if (nilai >= 0 && nilai <= 100) {
        daftarNilai.push(nilai);
      } else {
        return console.log(
          `Nilai ${nilai} tidak valid. Rentang nilai yang diizinkan 0-100`
        );
      }
    }
    this.daftarNilai = daftarNilai;
  }
  getAverageNilai() {
    let totalNilai = 0;
    let average = 0;
    if (this.daftarNilai.length !== 0) {
      for (let nilai of this.daftarNilai) {
        totalNilai += nilai;
      }
      average = totalNilai / this.daftarNilai.length;
    }
    return average;
  }
  getGrade() {
    const average = this.getAverageNilai();
    let grade;
    const predikatNilai = {
      '91-100': 'A',
      '86-90': 'B+',
      '81-85': 'B',
      '76-80': 'C+',
      '70-75': 'C',
      '60-69': 'D',
      '0-59': 'E',
    };
    for (const key in predikatNilai) {
      const [batasBawah, batasAtas] = key
        .split('-')
        .map((nilai) => parseInt(nilai));

      if (average >= batasBawah && average <= batasAtas) {
        grade = predikatNilai[key];
        return grade;
      }
    }
    return grade;
  }
}

console.log('\n=== Student Instance ===');
const billGates = new Student('Bill Gates', 20104040221);
billGates.insertNilai(80, 90, 70, 95, 80);
const billGatesAverage = billGates.getAverageNilai();
const billGatesGrade = billGates.getGrade();
console.log('Nama :', billGates.nama);
console.log('NIM :', billGates.NIM);
console.log('Daftar Nilai :', billGates.daftarNilai);
console.log('Nilai Rata-Rata :', billGatesAverage);
console.log('Predikat Nilai :', billGatesGrade);
