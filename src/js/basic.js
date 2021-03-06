/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable max-len */
// eslint-disable-next-line max-classes-per-file
export class Team { // Класс c данными о персонажах команды
  constructor() {
    this.members = new Set();
  }

  add(pers) { // метод добавления персонажа
    try {
      if (this.members.has(pers)) {
        throw new Error('попытка добавить уже внесённого персонажа!');
      }
    } catch (err) {
      errorRepository.add('100', err.message); // передача появившейся ошибки в репозиторий ошибок
      // eslint-disable-next-line no-console
      console.log('ошибка: ', '100');
    }
    this.members.add(pers);
  }

  addAll(...persons) { // метод одновременного добавления нескольких персонажей
    for (const arg of persons) this.members.add(arg);
  }

  toArray() { // метод конвертации объекта Set в массив
    const result = [...this.members];

    return result;
  }
}

class ErrorRepository { // Класс репозитория ошибок
  constructor() {
    this.errStorage = new Map();
  }

  add(errCode, errMessage) { // метод добавления ошибки в репозиторий
    this.errStorage.set(errCode, errMessage);
  }

  translate(code) { // метод конвертации кода в описание
    let result;
    if (this.errStorage.has(code)) result = this.errStorage.get(code);

    else result = 'Unknown error';

    return result;
  }
}

export let errorRepository = new ErrorRepository(); // экспорт значения ошибки (проверка повторной записи в set)
