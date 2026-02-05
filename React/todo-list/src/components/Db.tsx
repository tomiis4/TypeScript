import { Dexie } from 'dexie';
import type EntityTable from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

// Typing for your entities (hint is to move this to its own module)
export interface Friend {
    id: number;
    name: string;
    age: number;
}

// Database declaration (move this to its own module also)
export const db = new Dexie('FriendDatabase') as Dexie & {
    friends: EntityTable<Friend, 'id'>;
};
db.version(1).stores({
    friends: '++id, age',
});

// Component:
export function MyDexieReactComponent() {
    const youngFriends = useLiveQuery(() =>
        db.friends
            .where('age')
            .below(30)
            .toArray()
    );

    return (
        <>
            <h3>My young friends</h3>
            <ul>
                {youngFriends?.map((f) => (
                    <li key={f.id}>
                        Name: {f.name}, Age: {f.age}
                    </li>
                ))}
            </ul>
            <button
                onClick={() => {
                    db.friends.add({ name: 'Alice', age: 21 });
                }}
            >
                Add another friend
            </button>
        </>
    );
}
