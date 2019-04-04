let users = [];

module.exports = {
    create: (req, res) => {
        console.log("ReqBody: ", req.body)
         const { id, name, alias, balance } = req.body;
         users.push({ id, name, alias, balance });
        //  id++;
         res.status(200).send(users);
       },
 
    //  read: (req, res) => {
    //      res.status(200).send(messages);
    //  },
   
    
    //  update: (req, res) => {
    //      const {text} = req.body;
    //      const updateID = req.params.id;
    //      const messageIndex = messages.findIndex(message => message.id == updateID);
    //      let message = messages[messageIndex];
 
    //      messages[messageIndex] = {
    //          id: message.id,
    //          text: text || message.text,
    //          time: message.time
    //      };
 
    //      res.status(200).send(messages); //might need to change to only send a msg
     } 
 
    //  delete: (req, res) => {
    //      const deleteID = req.params.id;
    //      const messageIndex = messages.findIndex(message => message.id == deleteID);
    //      messages.splice(messageIndex, 1);
    //      res.status(200).send(messages);
 
    //  }
 
    //  };