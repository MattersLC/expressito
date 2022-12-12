const httpError = (res,err) => {
    console.log(err)
    res.status(500);
    res.send({error: 'Algo está pasando'});
}

module.exports = {httpError}