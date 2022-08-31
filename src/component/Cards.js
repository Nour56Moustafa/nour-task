import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Cards = () => {
  return (
    <section className="cards box">
      <Card1
        title="السؤال الأول:"
        explain="تمثّل الدورة الالكترونية المشروع الأول المشترك بين قسم المهارات الشخصية و القسم الالكتروني، يتمتع أعضاء فريق القسمين بخلفيات ثقافية و أكادمية مختلفة."
        maxWords={100}
        question1={true}
      />
      <Card2 />
      <Card1
        title="تبرير:"
        explain="برر إجابتك (150 كلمة)"
        maxWords={150}
        question1={false}
      />
    </section>
  );
};

export default Cards;
