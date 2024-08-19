import { Router } from "express";

app.post('/api/url',(async (req,res)=>{
    try {

        const { originalUrl, customUrl } = req.body;

        if(originalUrl && customUrl === ""){
            return res.status(400).send("Missing required fields: originalUrl or customUrl")
        }
          const urlData = await UrlModel.create({
              originalUrl,
              customUrl,
              totalVisitor:0,
              newVisitor:0,
          })
          return res.status(201).send(urlData)
    } catch (error) {
       res.status(500).send("Error while creating custom URL:", error.message)
    }
   
   }))
   
   
   app.get('/api/url/:customURL', async (req, res) => {
       try {
           const ogUrl = await UrlModel.findOne({ customUrl: req.params.customURL });
           
           if (ogUrl) {
               console.log(ogUrl.originalUrl);
               res.send(ogUrl.originalUrl);
           } else {
               res.status(404).send('URL not found');
           }
       } catch (error) {
           res.status(500).send(`Error while getting custom URL: ${error.message}`);
       }
   });
   