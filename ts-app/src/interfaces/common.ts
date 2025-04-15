/**
 * MenuList interface
 */
export interface Menu {
    name: string;
    emoji: string;
}

export interface MenuPrice extends Menu {
    price?: number;
}

export interface MenuSource extends Menu {
    source?: string;
}