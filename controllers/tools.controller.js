

module.exports.getAllTools = (req, res, next) => {
    // res.send("tools found");
    // res.download(__dirname+ "/tools.controller.js ");
    // const {ip,query,params,body,headers} = req;
    // console.log(ip,query,params,body,headers);
    res.send("tools found getAllTools ");

}

module.exports.saveATool = (req, res, next) => {
    res.send("tool added");
}

module.exports.getToolDetail = (req, res, next) => {
    res.send("Tool detail found");
}