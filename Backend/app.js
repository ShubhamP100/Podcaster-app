   const cors = require("cors"); 
  const express = require("express");
  const cookieParser =require("cookie-parser");
  const Catpi= require("./routes/categories");
  const PodcastApi= require("./routes/podcast")
  const app =express();
  const userApi = require("./routes/user");
  
  // use this line to transfer the data from frontend to backend and backend to frontend
  require("dotenv").config();
  require("./conn/conn");
  app.use(express.json());
  app.use("/api/v1",userApi);
  app.use(cookieParser());
  app.use(cors({
  
    origin: 'http://localhost:5175',  // Frontend URL
  }));
  app.use("/api/v1",userApi)
  app.use("/api/v1",Catpi);
  app.use("/api/v1",PodcastApi);
  
  app.listen(process.env .PORT,()=>{
  console.log(`server loading on port: ${process.env.PORT} `);
    

  });