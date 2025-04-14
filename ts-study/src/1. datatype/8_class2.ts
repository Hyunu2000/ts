/**
 * 동물병원 --> 초코(푸들), 삐삐(고양이), 하양이(토끼)
 * 클래스 설계 : Dog, Cat, Rabbit
 * Animal(부모)
 * 속성 : 이름, 혈액형, 색깔
 * 행위 : 먹는다, 잔다
 * 
 * Dog(자식) extends Animal
 *  부모의 속성과 상속을 상속받아 사용할 수 있다.
 * 속성 : 이름, 혈액형, 색깔
 * 행위 : 먹는다, 잔다
 */
class Animal {
    name: string;
    blood: string;
    color: string;

    constructor(name: string, blood: string, color: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
    }
    sleep(): void {
        console.log(`${this.name}가 잠을 자요.`);
    }
}

class Dog extends Animal{
    type: string;

    constructor(name: string, blood: string, color: string, type: string) {
        super(name, blood, color); // 부모의 생성자 호출
        this.type = type;
    }
}

class Cat extends Animal {
    type: string;

    constructor(name: string, blood: string, color: string, type: string){
        super(name, blood, color)
        this.type = type;
    }
}

// 상속 관계의 Dog 클래스 호출
// "초코", "A", "브라운"
const 초코: Dog = new Dog("초코", "A형", "브라운", "푸들");
console.log(초코.name);
console.log(초코.blood);
console.log(초코.color);
console.log(초코.type);
초코.sleep();

console.log("--------------------------------");

// "코코", "B형", "흰색", "스코티쉬폴드"
const 코코: Cat = new Cat("코코", "B형", "흰색", "스코티쉬폴드");
console.log(코코.name);
console.log(코코.blood);
console.log(코코.color);
console.log(코코.type);
코코.sleep();