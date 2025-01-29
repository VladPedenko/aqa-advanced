function divide(numerator,denominator){
    if (denominator === 0) {
        throw new Error('Ділити на нуль не можна!')
    }
    if ((typeof numerator !== 'number') || (typeof denominator !== 'number')) {
        throw new Error('Аргумент не є числом')
    }
    return numerator / denominator;
}


try {
    console.log(divide(100,5));
  } catch (error) {
          console.log('Сталася помилка:', error.message);
  } finally {
     console.log('Робота завершена');
  }

  try {
    console.log(divide(100,0));
  } catch (error) {
          console.log('Сталася помилка:', error.message)
  } finally {
     console.log('Робота завершена')
  }

  try {
    console.log(divide(100,'dhf'));
  } catch (error) {
          console.log('Сталася помилка:', error.message)
  } finally {
     console.log('Робота завершена')
  }