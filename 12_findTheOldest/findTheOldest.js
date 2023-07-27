const findTheOldest = function(people) {
    let oldest = null;
    let age = 0;

    people.forEach(person => {
        if ("yearOfDeath" in person) {
            let tmp = person.yearOfDeath - person.yearOfBirth;

            if (tmp > age) {
                oldest = person;
                age = tmp;
            }
        } else {
            let year = new Date().getFullYear();
            let tmp = year - person.yearOfBirth;

            if (tmp > age) {
                oldest = person;
                age = tmp;
            }
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
