
async function login() {
    let name = prompt(`Ваше имя?`)
    loginName.innerHTML = name
}

function startHTML() {
    for (let i = 0; i < courcesList.length; i++) {

        let section = document.createElement(`section`);
        section.className = `section_curse_style`;
        main.append(section);

        let divSumOne = document.createElement(`div`);
        divSumOne.className = `width_section_one`
        section.append(divSumOne);

        let divName = document.createElement(`div`)
        divName.className = `text_bold_decoration`
        divName.innerHTML = courcesList[i].name
        divSumOne.append(divName)

        let divDescription = document.createElement(`div`);
        divDescription.className = "text_normal_decoration"
        divDescription.innerHTML = courcesList[i].description
        divSumOne.append(divDescription)

        let divSumTwo = document.createElement(`div`);
        divSumTwo.className = "width_section_two"
        section.append(divSumTwo);

        let divAutors = document.createElement(`div`);
        divAutors.innerHTML = `Aвторы ` + courcesList[i].authors
        divSumTwo.append(divAutors)
        

        let divDuration = document.createElement(`div`);
        divDuration.innerHTML = `Продолжительность: ` + courcesList[i].duration + ` часов`
        divSumTwo.append(divDuration)

        let divCreated = document.createElement(`div`);
        divCreated.innerHTML = courcesList[i].created
        divSumTwo.append(divCreated)

    }
}
