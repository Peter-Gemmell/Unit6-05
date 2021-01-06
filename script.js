// defining variable of day and the prompt input for it
const day = prompt('What day is it Today? (all lower case)')
// defining variable of age and the prompt input for it
const age = prompt('How old are you?')
// if day isnt saturday and isnt sunday and under 18
if ((day !== 'saturday' && day !== 'sunday') && (age < 18)) {
  // then display 'you have school today'
  document.write('You have school today')
  // if day isnt saturday and isnt sunday and over 18
} if ((day !== 'saturday' && day !== 'sunday') && (age > 18)) {
  // then display 'you have work today'
  document.write('You have work today!')
  // else if its saturday or sunday
} else if (day === 'saturday' || day === 'sunday') {
  // display 'its the weekend so relax'
  document.write('Relax for the weekend!')
}
