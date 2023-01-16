const 
   products = [
    {
        id:"1",
        mealName: "Burger",
        price: 200,
        description: "Yum!",
        path:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        category: "Snacks",
     
        },
        {
        id:"2",
        mealName: "Grilled Steak",
        price: 300,
        description: "Yum!",
        path: "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg",
        category:"Meats"
        
        }
        // {
        //     id:"3",
        //     mealName: "Fresh Vegetable with eggs",
        //     price: 900,
        //     description: "Yum!",
        //     path: "https://cdn.pixabay.com/photo/2021/04/23/07/42/salad-6200957_1280.jpg",
        //     category:"Salad",
            
        //     },
        //     {
        //         id:"4",
        //         mealName: "Macarons",
        //         price: 200,
        //         description: "Yum!",
        //         path: "https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810_1280.jpg",
        //         category:"Snacks",
                
        //         },
        //         {
        //             id:"5",
        //             mealName: "Pork ribs",
        //             price: 1000,
        //             description: "Yum!",
        //             path: "https://cdn.pixabay.com/photo/2016/03/05/20/06/abstract-1238656_960_720.jpg",
        //             category:"Meats",
                    
        //             },
                ]
                
                
// function getProductData(id) {
//     let productData = productsArray.find(product => product.id === "3")
//     if (productData == undefined){
//         console.log("Product data does not exist for ID " + id)
//         return undefined
//     }
//     return productData;
// }
export { products }
// to get data form only id in cart maybe?

 //allows to give this data to any component in this project