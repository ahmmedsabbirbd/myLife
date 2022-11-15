const myLife=(aim, workType=0) => {
    let messages;
    if (workType == 'hard' || workType == '99%' || workType == '100%' || workType == 'Dolar') {
        messages = `Congratulations. Your ${aim} is success` 
    } else {
        messages = `Oops! Sorry, Not Congratulations. Hard work for ${aim} success`;
    }

    console.log(messages);
}

myLife('Love');
myLife('Job');
myLife('Perfect Man', '79%');
myLife('Front End Developer', '99%');