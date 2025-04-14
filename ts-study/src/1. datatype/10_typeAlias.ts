/** 
 * 타입 별칭 - 객체의 타입을 정의함, 인터페이스와 같은 역할로 사용됨
 */
type AnimalType = {
    name: string;
    blood: string;
    color: string;
    sleep(): void;
    info(): void;
}

// 타입을 구현하기 위한 클래스 정의
class typeClass implements AnimalType {
    name: string;
    blood: string;
    color: string;

    constructor(name: string, blood: string, color: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
    }

    sleep(): void {}
    info(): void {
        console.log(`${this.name}의 혈액형은 ${this.blood}이고, 색깔은 ${this.color}입니다`)
    }
}
// AnimalType의 객체 생성
// 객체의 타입이 AnimalType이므로 info() 메소드 호출 불가!!
// const 레오: AnimalType = new typeClass("레오", "A형", "브라운"); 

// 객체의 타입이 typeClass이므로 info() 함수 호출 가능!!
const 레오: typeClass = new typeClass("레오", "A형", "브라운"); 
레오.info();