type major = 'MajorCredits';
type minor = 'MinorCredits';
interface MajorCredits {
    credits: number;
    brand: major
}

interface MinorCredits {
    credits: number;
    brand: minor
}

let subject1: MinorCredits = {
    credits: 120,
    brand: 'MinorCredits'
}

let subject2: MinorCredits = {
    credits: 60,
    brand: 'MinorCredits'
}

function sumMinorCredits(subject1:MinorCredits, subject2: MinorCredits) {
    subject1.credits += subject2.credits
    return subject1;
}

function sumMajorCredits(subject1:MajorCredits, subject2: MajorCredits) {
    subject1.credits += subject2.credits
    return subject1;
}
