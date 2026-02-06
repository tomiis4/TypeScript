import { Dexie } from 'dexie';
import type { EntityTable } from 'dexie';

interface Card {
    id: number;
    value: string;
    color: string;
    isActive: boolean;
}

class Database extends Dexie {
    cards!: EntityTable<Card, "id">;
    constructor() {
        super("CardDb");

        this.version(1).stores({
            // tables (++id to automatically increment)
            cards: "id, value, color, isActive"
        })
    }

    deleteCard = (id: number) => {
        this.cards.delete(id);
    }

    addCard = async (id: number, value: string, color: string, isActive: boolean) => {
        try {
            await this.cards.add({
                id: id,
                value: value,
                color: color,
                isActive: isActive
            });
        } catch (e) {
            console.log("error: ", e);
        }
    }

    updateCardActivity = (id: number, isActive: boolean) => {
        this.cards.update(id, {
            isActive: isActive,
        })
    }
}

const db = new Database();

export { db, type Card };
