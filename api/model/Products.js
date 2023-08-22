const db = require ("../config")
class Products{
    // fetch all products
    fetchProducts(req,res){
        const query =`
        SELECT prodID,prodName,quantity,amount,
        Category,prodUrl TEXT
        FROM Products;
        `
        db.query(query,
            (err,results) => {
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            })
    }
    // fetch single product
    fetchProduct(req, res){
        const query = `
        SELECT prodID,prodName,quantity,amount,
        Category,prodUrl TEXT
        FROM Products;
        WHERE prodID = ${req.params.id}
        `
        db.query(query,
            (err, result) => {
               if(err) throw err
               res.json({
                   status: res.statusCode,
                   result
               })
            } )
    }
    //update product
    updateProduct(req, res){
        const query =`
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `
        db.query(query,[req.body, req.params],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"The Product was updated."
                })
            })
    }
    //delete product
    deleteProduct(req,res){
        const query =
         `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'Product was deleted.'
        })
        })
    }
}

module.exports  = Products;
