function getAverage(scores) {
    const sum = scores.reduce((ac, el) => { return ac + el }, 0);
    return sum / scores.length
    }
    
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

    function getGrade(score) {
        if (score === 100) {
          return "A++"
        } else if (score >= 90 && score <=99) {
          return "A"
        } else if (score >= 80 && score <=89) {
          return "B"
        } else if (score >= 70 && score <=79) {
          return "C"
        } else if (score >= 60 && score <=69) {
          return "D"
        } else if (score >= 0 && score <=59) {
          return "F"
        }
        }
        
        console.log(getGrade(96));
        console.log(getGrade(82));
        console.log(getGrade(56));

        function hasPassingGrade(score) {
            const passingScore = ["A++", "A", "B", "C", "D"];
            const grade = getGrade(score)
            return passingScore.includes(grade)
          }
          
          
          console.log(hasPassingGrade(100));
          console.log(hasPassingGrade(53));
          console.log(hasPassingGrade(87));