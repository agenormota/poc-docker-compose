let tb_teste = require('../models/tb_teste.model');


exports.deletetb_teste = (req, res) => {
    const id = req.params.id;
    console.log(JSON.stringify(req.params));
    console.log(id);
   
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }
    tb_teste.findById(id, (err, _tb_teste) => {
        if (err) {
            res.status(501).send(err);
            return;
        }
        
        _tb_teste.remove((err) => {
            if (err) {
                res.status(501).send(err);
                return;
            }
            res.send("success")
            return
        })
    });
}

exports.updatetb_teste = (req, res) => {
	let _tb_testeObj = new tb_teste(req.body);
    const id = _tb_testeObj._id
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }
    
    tb_teste.findByIdAndUpdate(id, req.body,  {new: true}, (err, _tb_teste) => {
        if (err) {
            res.status(501).send(err.message);
            return;
        }
        
        res.json(_tb_teste);
    });
}

exports.gettb_teste = (req, res) => {
    tb_teste.find({}, function(err, _tb_teste) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(_tb_teste);
        return;
    });
}
exports.createtb_teste = function (req, res) {
    
    let _tb_testeObj = new tb_teste(req.body)
    _tb_testeObj.save(function(err, _tb_teste) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(_tb_teste);
        return;
    });
}