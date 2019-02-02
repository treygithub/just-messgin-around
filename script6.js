const john = {
    fullname : " johhny boy",
    mass : 200,
    height : 6,
    calBmi: function() {
        this.bmi = this.mass /  (john.height * john.height)
        return this.bmi
    }
}
const mark = {
    fullname : " markky boy",
    mass : 300,
    height : 6.5,
    calBmi: function() {
        this.bmi = this.mass /  (mark.height * mark.height)
        return this.bmi
    }
}
john.calBmi()
mark.calBmi()

console.log('john.bmi', john)
console.log('mark.bmi', mark)