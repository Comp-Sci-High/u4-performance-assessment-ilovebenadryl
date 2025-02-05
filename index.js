const express = require('express')
const app = express()

const posts = [
    {
      username: "fit_guru",
      caption: "Morning grind! 💪 #NoExcuses",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZI08H5ftlC7fpnSdYPXWSbCR0ZSRquRgXA&s",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-02T08:15:00Z",
      likesCount: 1204,
      commentsCount: 87,
      isVideo: false,
    },
    {
      username: "travel_lover",
      caption: "Sunsets in Bali hit different 🌅✨",
      imageUrl: "https://static.wanderon.in/wp-content/uploads/2023/08/mesmerizing-view-calm-ocean-trees-shore-during-sunset-indonesia_181624-23681-min-1.jpg",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-01T18:45:00Z",
      likesCount: 3400,
      commentsCount: 231,
      isVideo: false,
    },
    {
      username: "chef_master",
      caption: "Homemade pasta from scratch! 🍝🔥",
      imageUrl: "https://www.seriouseats.com/thmb/hQrDUDh9I8XmZXWFKq9j4Rqh68k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__01__20141222-pasta-making-vicky-wasik-50-25f1e346c83144b3b6ae7c3e148578cc.jpg",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-02T12:30:00Z",
      likesCount: 1578,
      commentsCount: 112,
      isVideo: false,
    },
    {
      username: "tech_guy",
      caption: "Unboxing the latest smartphone 📱🚀",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3o_JCVmee9LfXNX9_lwWkNXJYX7gXOryKLA&s",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-02T15:00:00Z",
      likesCount: 5021,
      commentsCount: 309,
      isVideo: true,
    },
    {
      username: "pet_world",
      caption: "Meet Charlie, the cutest golden retriever! 🐶❤️",
      imageUrl: "https://www.mygoldenretrieverpuppies.com/wp-content/uploads/2022/06/Golden-Retriever-Puppies.jpeg",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-02T10:10:00Z",
      likesCount: 2945,
      commentsCount: 1989,
      isVideo: false,
    },
    {
      username: "gaming_addict",
      caption: "Final boss fight! Who's ready? 🎮🔥",
      imageUrl: "https://preview.redd.it/been-stuck-on-this-boss-for-at-least-6months-now-v0-j4b5vep4co0d1.jpeg?width=640&crop=smart&auto=webp&s=7bb8ca2b415a6abb8f9d2a530f22dd810afe0af6",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-01T22:20:00Z",
      likesCount: 6723,
      commentsCount: 412,
      
    },
    {
      username: "fashionista",
      caption: "Weekend outfit inspo! 👗✨",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxrlE2Y0KV8lnUIQ-mMNwu69fJAxOkOQzqw&s",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-02T14:00:00Z",
      likesCount: 2134,
      commentsCount: 156,
      isVideo: false,
    },
    {
      username: "nature_wanderer",
      caption: "Hiking through the Rockies! 🌲🏔️",
      imageUrl: "https://cdn7.dissolve.com/p/D869_7_149/D869_7_149_1200.jpg",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-01T09:30:00Z",
      likesCount: 4211,
      commentsCount: 289,
      isVideo: false,
    },
    {
      username: "car_enthusiast",
      caption: "The roar of a V8 never gets old! 🚗💨",
      imageUrl: "https://i.ytimg.com/vi/tWtrp0u0zl4/maxresdefault.jpg",
      imageUrl2: "https://cdn.pfps.gg/pfps/2301-default-2.png",
      postTime: "2025-02-01T16:50:00Z",
      likesCount: 5389,
      commentsCount: 347,
      
    },
    {
      username: "yourdaily_quotes1298",
      caption: "Believe in yourself and all that you are. 💫",
      imageUrl: "https://www.brainyquote.com/photos_tr/en/w/waynedyer/173498/waynedyer1.jpg",
      imageUrl2: "https://i.ytimg.com/vi/tWtrp0u0zl4/maxresdefault.jpg",
      postTime: "2025-02-02T07:00:00Z",
      likesCount: 11,
      commentsCount: 0,
      isVideo: false,
    }
  ];
  
  // https://chatgpt.com/share/67a036c8-5e90-8002-b123-99c13309d36a - object


app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  app.use(express.static(__dirname + "/public"))

  app.get("/all", (request,response) =>{
    response.render("overview.ejs", {posts} )
    })

    app.get("/post/:id", (request,response) =>{
      const id = request.params.id;
      response.render("specific.ejs", posts[id])
    })

  app.get("/", (request,response) =>{
    response.sendFile(__dirname + "/public/index.html")
    })







app.listen(3000, () => {
    console.log("Server running")
  })