
const tools = [
    { id: 1, name: "Hammer1" },
    { id: 2, name: "Hammer2" },
    { id: 3, name: "Hammer3" }
];

module.exports.getAllTools = (req, res, next) => {
    const { limit, page } = req.query;
    console.log(limit, page);
    // res.send("tools found");
    // res.download(__dirname+ "/tools.controller.js ");
    // const {ip,query,params,body,headers} = req;
    // console.log(ip,query,params,body,headers);
    // res.send(tools);
    res.json(tools.slice(0, limit));

}

module.exports.saveATool = (req, res, next) => {
    // console.log(req.body);
    console.log(req.query);
    tools.push(req.body);
    res.send(tools);
    
}

module.exports.getToolDetail = (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    // const filter = { _id: id };
    const foundTool = tools.find(tool => tool.id === Number(id));
    res.send(foundTool);

}