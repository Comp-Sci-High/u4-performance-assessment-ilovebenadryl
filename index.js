const express = require('express')
const app = express()

const posts = [
    {
      username: "fit_guru",
      caption: "Morning grind! 💪 #NoExcuses",
      imageUrl: "https://example.com/images/workout1.jpg",
      postTime: "2025-02-02T08:15:00Z",
      likesCount: 1204,
      commentsCount: 87,
      isVideo: false,
    },
    {
      username: "travel_lover",
      caption: "Sunsets in Bali hit different 🌅✨",
      imageUrl: "https://example.com/images/bali_sunset.jpg",
      postTime: "2025-02-01T18:45:00Z",
      likesCount: 3400,
      commentsCount: 231,
      isVideo: false,
    },
    {
      username: "chef_master",
      caption: "Homemade pasta from scratch! 🍝🔥",
      imageUrl: "https://example.com/images/pasta.jpg",
      postTime: "2025-02-02T12:30:00Z",
      likesCount: 1578,
      commentsCount: 112,
      isVideo: false,
    },
    {
      username: "tech_guy",
      caption: "Unboxing the latest smartphone 📱🚀",
      imageUrl: "https://example.com/videos/unboxing.mp4",
      postTime: "2025-02-02T15:00:00Z",
      likesCount: 5021,
      commentsCount: 309,
      isVideo: true,
    },
    {
      username: "pet_world",
      caption: "Meet Charlie, the cutest golden retriever! 🐶❤️",
      imageUrl: "https://example.com/images/golden_retriever.jpg",
      postTime: "2025-02-02T10:10:00Z",
      likesCount: 2945,
      commentsCount: 1989,
      isVideo: false,
    },
    {
      username: "gaming_addict",
      caption: "Final boss fight! Who's ready? 🎮🔥",
      imageUrl: "https://example.com/videos/boss_fight.mp4",
      postTime: "2025-02-01T22:20:00Z",
      likesCount: 6723,
      commentsCount: 412,
      isVideo: true,
    },
    {
      username: "fashionista",
      caption: "Weekend outfit inspo! 👗✨",
      imageUrl: "https://example.com/images/fashion.jpg",
      postTime: "2025-02-02T14:00:00Z",
      likesCount: 2134,
      commentsCount: 156,
      isVideo: false,
    },
    {
      username: "nature_wanderer",
      caption: "Hiking through the Rockies! 🌲🏔️",
      imageUrl: "https://example.com/images/rockies_hike.jpg",
      postTime: "2025-02-01T09:30:00Z",
      likesCount: 4211,
      commentsCount: 289,
      isVideo: false,
    },
    {
      username: "car_enthusiast",
      caption: "The roar of a V8 never gets old! 🚗💨",
      imageUrl: "https://example.com/videos/v8_sound.mp4",
      postTime: "2025-02-01T16:50:00Z",
      likesCount: 5389,
      commentsCount: 347,
      isVideo: true,
    },
    {
      username: "daily_quotes",
      caption: "Believe in yourself and all that you are. 💫",
      imageUrl: "https://example.com/images/motivation.jpg",
      postTime: "2025-02-02T07:00:00Z",
      likesCount: 3120,
      commentsCount: 203,
      isVideo: false,
    }
  ];
  
  


app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  app.use(express.static(__dirname + "/public"))

  app.get("/all", (request,response) =>{
    response.render("overview.ejs", posts)
    })

    app.get("/post/:id", (request,response) =>{
      const id = req.params.id
    })

  app.get("/", (request,response) =>{
    response.render("index.html")
    })







app.listen(3000, () => {
    console.log("Server running")
  })