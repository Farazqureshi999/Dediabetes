// create pages dynamically 
const path = require('path');

exports.createPages = async ({graphql,actions}) =>{
   const {createPage} = actions;
   const result = await graphql(`
   query getAllProducts{
    products:allContentfulProduct{
      nodes{
        slug
      }
    }
  }
   `)
   result.data.products.nodes.forEach(product => {
       createPage({
           path : `/products/${product.slug}`,
           component: path.resolve('src/templates/blog-post.js'),
           context: {
               slug : product.slug
           }
       })
   });
}