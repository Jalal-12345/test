let qAa = [
    {
        quistion: " عرف  تجويد لغة ",
        RightAnswere: "",
    }, 
    {
        quistion: "عرف التجويد إصطلاحا",
        RightAnswere: "",
    },
    {
        quistion: "مامعنى التجويد ",
        RightAnswere: "",
    },
    {
        quistion: "ماهو علم التجويد",
        RightAnswere: "",
    },
    {
        quistion: " غايته التجويد",
        RightAnswere: "",
    },
    {
        quistion: "ماهو موضوع التجويد",
        RightAnswere: "",
    },
    {
        quistion: "ماهو إستمداد التجويد",
        RightAnswere: "",
    },
    {
        quistion: "ما أهمية التجويد وفضله",
        RightAnswere: "",
    },
    {
        quistion: "تاريخ التأليف في التجويد",
        RightAnswere: "",
    },
    {
        quistion: "أول مؤلف مستقل في علم التجويد ",
        RightAnswere: "",
    },
    {
        quistion: "حكم التجويد",
        RightAnswere: "",
    },
    {
        quistion: "التعريف النظري وحكمه ",
        RightAnswere: "",
    },
    {
        quistion: "التعريف العملي وحكمه ",
        RightAnswere: "",
    },
    {
        quistion: "أدلة وجوب التجويد",
        RightAnswere: "",
    },
    {
        quistion: "معنى ورتل ",
        RightAnswere: "",
    },
    {
        quistion: "أداب التلاوة",
        RightAnswere: "",
    },
    {
        quistion: "ألف في ذلك مؤلفات كثيرة أهمها",
        RightAnswere: "",
    },
    {
        quistion: "الاداب التي تراع أثناء التلاوة",
        RightAnswere: "",
    },
    {
        quistion: "مراتب القراءة ",
        RightAnswere: "",
    },
    {
        quistion: "تعريف الحدر",
        RightAnswere: "",
    },
    {
        quistion: "تعريف التدوير",
        RightAnswere: "",
    },
    {
        quistion: "تعريف التحقيق",
        RightAnswere: "",
    },
    {
        quistion: "حكم مس المصحف للمحدث",
        RightAnswere: "",
    },
    {
        quistion: "أنواع هجر القرآن الكريم ",
        RightAnswere: "",
    },
    {
        quistion: "أداب عامة تتعلق بالتلاوة",
        RightAnswere: "",
    },
    
]




function showQusion(){
   let continer =  document.querySelector(".continer")
   continer.innerHTML = ""
   for(i=0; i<qAa.length; i++){
    continer.innerHTML += `
    <div class="q">
    <div class="qcount"> سؤال: ${i+1}</div>
    <div class="quistion">${qAa[i].quistion}</div>
    <div class="answere"><input type="text" placeholder="إكتب الاجابة هنا"></div>
</div>
    `
   }
}

showQusion()

