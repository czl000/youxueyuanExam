var question= document.getElementsByClassName("multiple-choice record")
var arr =Array.from(question)

 function get(id,back){
    $.ajax({
        type: "get",
        url: "https://api.ulearning.cn/questionAnswer/" + id,
        datatype: "json",
        success: function(result) {
            console.log(result.correctAnswerList);
            back(result.correctAnswerList);
        }
      });
 }

 arr.forEach(one=>{
    let id= one.dataset.id;
    get(id,function(Answer){
        Array.from(one.children)[0].innerText+="========答案是:"+Answer;
    })
 })
