const List = () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    const itemsList = items.map((item, index) => <li key={index}>{item}</li>);

    const li2 = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Doe', age: 40 }
    ];

    const itemList2 = li2.map(i => <li key={i.name}>{i.name}</li>);

    return (
        <>
            <ol>
                {itemsList}
            </ol>
            
            <hr />
            
            <ol>
                {itemList2}
            </ol>
        </>
    );
}

export default List;