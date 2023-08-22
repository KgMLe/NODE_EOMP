const db = require ("../config")
class Products{
    // fetch all products
    fetchProducts(req,res){
        const query =`
        SELECT prodID,prodName,quantity,amount,
        Category,prodUrl
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
        Category,prodUrl
        FROM Products
        WHERE prodID = ?
        `
        db.query(query, [req.params.id], (err, result) => {
            if (err) { 
                console.error(err);
                res.status(500).json({
                    error: "An error occurred while fetching the user.",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    //register
    registerProduct(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO Products
        SET ?
        `;
    
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error registering product:", err);
                return res.status(500).json({
                    status: 500,
                    error: "Failed to register the product"
                });
            }
    
            res.json({
                status: res.statusCode,
                msg: "Product registered successfully"
            });
        });
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
