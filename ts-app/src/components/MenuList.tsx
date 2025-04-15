import React from 'react';

// 1. props 타입을 체크!! : property와 데이터 타입이 동일 - interface, type
// interface MenuListProps {
//     menus: {
//         name: string;
//         emoji: string;
//         price?: number; // ? 있어도 되고 없어도 되는 Prop
//         source?: string;
//     }
// }

//2. props 타입을 체크!! : interface + type
// interface Menu {
//     name: string;
//     emoji: string;
//     price ?: number; 
//     source ?: string;
// }
// type MenuListProps = {
//     menus: Menu[];
// }

//3. props 타입을 체크!!: interface(부모, 자식 관계도출) + type
interface Menu {
    name: string;
    emoji: string;
}
interface MenuPrice extends Menu{
    price ?: number; 
}
interface MenuSource extends Menu{
    source ?: string;
}

// 4. interface 또는  typeAlias를 별도의 파일로 저장후 import해서 사용함
// tsconfig.json 파일에 저장된 파일의 경로를 path와 별칭으로 추가한 후 import

type MenuListProps = {
    menus: (Menu | MenuPrice | MenuSource)[];
} 

const MenuList: React.FC<MenuListProps> = ({menus}) => {
    return (
        <div>
            <h2>MenuList!!!</h2>
            <ul>
                {
                    menus.map((menu) => {
                        <li>
                            {menu.name}
                            {menu.emoji}
                            {'price' in menu && menu.price}
                            {'source' in menu && menu.source}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default MenuList;