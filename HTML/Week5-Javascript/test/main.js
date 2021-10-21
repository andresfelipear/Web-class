//1. Array students
let students =  [{name: 'John',score1:47, score2:46},{name: 'Bob',score1:23, score2:24},{name: 'Nick',score1:40, score2:35},{name: 'Alex',score1:44, score2:45}];
console.log(students);

//2. Degrees and limits
let degrees = ["A","B","C","D","E"];
let limits = [91,81,71,61,51];


//3. Calc total score
var studentsTotalScore = [];
function calcTotalScore(){
    for(var i=0; i<students.length;i++){
        var student = students[i];
        //console.log(`Student ${i+1}\nTotal Score: ${student.score1+student.score2}
        //`);
        var studentScore = {name: `${student.name}`, totalScore: student.score1+student.score2};
        studentsTotalScore.push(studentScore);
    }
}

calcTotalScore();

function passExam(){
    for(var i=0;i<studentsTotalScore.length;i++){
        var student = studentsTotalScore[i];
        var studentDegree = "";
        //The student pass the exam
        if(student.totalScore > 61){
            if(student.totalScore <71){
                studentDegree = degrees[2];
            }
            else if((student.totalScore >= 71) && (student.totalScore < 81)){
                studentDegree =degrees[1];
            }
            else{
                studentDegree = degrees[0];
            }

            console.log(`Student: ${student.name}\nDegree: ${studentDegree}\nScore:${student.totalScore}`);
        }
    }
}

passExam();
