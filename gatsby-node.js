// create pages dynamically 
const path = require('path');

//Create Dynamic Slug
exports.onCreateNode = ({node, actions}) =>{
    const {createNodeField} = actions
    if (node.internal.type === 'MarkdownRemark'){
        const str = node.frontmatter.postslug;
        if (/\s/.test(str)) {
          const slugTitle = str.replace(/ +/g, "-");
          createNodeField({
            node,
            name: 'slug',
            value: slugTitle
        })
        }
        else{
          const slugTitle = str;
          createNodeField({
            node,
            name: 'slug',
            value: slugTitle
        })
        }
        
      
    }
}

exports.createPages = async ({graphql,actions}) =>{
   const {createPage} = actions;
   const result = await graphql(`
   query getAllPost{
    allMarkdownRemark{
      edges{
        node{
          id
          fields{
            slug
          }
        }
      }
    }
  }
    
   `)

   const posts = result.data.allMarkdownRemark.edges;
   
   posts.forEach( ({node}) => {
       createPage({
           path : node.fields.slug,
           component: path.resolve('src/templates/blog-post.js'),
           context: {
               slug : node.fields.slug
           }
       })
   });
}