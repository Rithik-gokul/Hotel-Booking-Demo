const hotelInfo = [
    {
        id:1,
        price: "500",
        location: "Japan",
        property: "Office",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        rating:9.2 
    },
    {
        id:2,
        price: "2700",
        location: "New York",
        property: "House",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:7.2  
    },
    {
        id:3,
        price: "700",
        location: "Japan",
        property: "Office",
        imageUrl: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:5.2  
    },
    {
        id:4,
        price: "270",
        location: "Japan",
        property: "House",
        imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:8.2  
    },
    {
        id:5,
        price: "2600",
        location: "New York",
        property: "Office",
        imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:3.7  
    },
    {
        id:6,
        price: "6700",
        location: "India",
        property: "House",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:7.1  
    },
    {
        id:7,
        price: "2900",
        location: "New York",
        property: "Office",
        imageUrl: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:6.3  
    },
    {
        id:8,
        price: "2700",
        location: "India",
        property: "House",
        imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:8.1 
    },
    {
        id:9,
        price: "2400",
        location: "Japan",
        property: "House",
        imageUrl: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:2.7  
    },
    {
        id:10,
        price: "10000",
        location: "India",
        property: "Office",
        imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:9.0  
    },
    {
        id:11,
        price: "1400",
        location: "Japan",
        property: "House",
        imageUrl: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
        rating:2.7  
    },
    {
        id:12,
        price: "24000",
        location: "India",
        property: "Office",
        imageUrl: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:13,
        price: "3500",
        location: "New York",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:14,
        price: "4700",
        location: "Japan",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:15,
        price: "2400",
        location: "India",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:16,
        price: "2400",
        location: "New York",
        property: "Office",
        imageUrl: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:17,
        price: "6400",
        location: "Japan",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:18,
        price: "5300",
        location: "New York",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:19,
        price: "6300",
        location: "Japan",
        property: "Office",
        imageUrl: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    },
    {
        id:20,
        price: "2400",
        location: "New York",
        property: "House",
        imageUrl: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating:2.7  
    }

]

export default hotelInfo;