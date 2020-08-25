var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117322481_1008090839639767_7931776698930583646_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=7r0dhr9iLKwAX9P6rF0&_nc_ht=scontent.fdad1-1.fna&_nc_tp=7&oh=5ed98c5a5549ca4f0af961941bbd80f1&oe=5F5979E9',
        description : 'Sản phẩm do apple sản xuât',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'Samsung 7 Plus',
        image : 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/p720x720/103154034_2707077862855148_8466691720717195287_o.jpg?_nc_cat=111&_nc_sid=13bebb&_nc_ohc=RshJDK42YPIAX8gh2f5&_nc_ht=scontent.fdad2-1.fna&_nc_tp=6&oh=7efd744982a7534a9fa2e9faf900ce5e&oe=5F5850B5',
        description : 'Sản phẩm do samsung sản xuât',
        price : 300,
        inventory : 10,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo 7 Plus',
        image : 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/p720x720/103154034_2707077862855148_8466691720717195287_o.jpg?_nc_cat=111&_nc_sid=13bebb&_nc_ohc=RshJDK42YPIAX8gh2f5&_nc_ht=scontent.fdad2-1.fna&_nc_tp=6&oh=7efd744982a7534a9fa2e9faf900ce5e&oe=5F5850B5',
        description : 'Sản phẩm do china sản xuât',
        price : 350,
        inventory : 10,
        rating : 4
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;